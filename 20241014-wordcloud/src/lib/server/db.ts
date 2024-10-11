import pg from "pg";
import format from "pg-format";
import { env } from "$env/dynamic/private";

const dbUrl = env.FLY_APP_NAME === undefined ? env.FLY_PG_PROXY_CONN_STRING : env.DATABASE_URL;

async function withClient<T>(async_callback: (client: pg.Client) => Promise<T>): Promise<T> {
    if (dbUrl === undefined) {
        throw new Error("Database URL is undefined. You need to set the appropriate environment variables.");
    }
    const client = new pg.Client({ connectionString: dbUrl });
    await client.connect();
    const res = await async_callback(client);
    client.end();
    return res;
}

// Get the data
export async function getData(table_name: string): Promise<[string, number][]> {
    return withClient(async (client) => {
        const query = format("SELECT item, count FROM %I;", table_name);
        const res = await client.query(query);
        return res.rows.map((row) => ({
            text: row.item,
            count: row.count
        }));
    });
}

// Adds an item to the database, or increments the count if it already exists.
// Returns the updated data.
export async function addData(table_name: string, item: string): Promise<[string, number][]> {
    await withClient(async (client) => {
        const query = format("INSERT INTO %I (item, count) VALUES (%L, 1) ON CONFLICT (item) DO UPDATE SET count = %I.count + 1;", table_name, item, table_name);
        await client.query(query);
    });
    return await getData(table_name);
}
