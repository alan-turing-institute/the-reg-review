# 14 Oct 2024, wordcloud (SvelteKit / TypeScript / PostgresQL)

**Original source: https://github.com/penelopeysm/wordcloud**

## Description

An web app that lets multiple users input text and shows a word cloud of everyone's input, written in SvelteKit and is backed by a PostgresQL database which stores the actual inputs.

The quality of the wordcloud generation is not amazing, the library that I used here isn't super great.
Suggestions are welcome :)

You can view the deployed web app at https://wordcloud.pysm.dev/.
This was used to create the word cloud of languages and technologies on the [new REG website](https://alan-turing-institute.github.io/REG/).
(I've since set up a new table, to avoid 'contaminating' the data there.)

## Running locally

To run this locally, you will need to do the following steps:

1. Install PostgresQL if you don't have it:

   ```bash
   brew install postgresql
   ```

1. Create a new folder for the database, and launch a PostgresQL server in that folder:

   ```bash
   mkdir db
   cd db
   initdb .
   pg_ctl start -D .
   ```

1. While you're still in the `db` directory, create a new database called `wordcloud`, then drop into the PostgresQL shell:

   ```bash
   createdb wordcloud
   psql wordcloud
   ```

1. You should see a prompt that looks like this.

   ```
   $ psql wordcloud
   psql (14.13 (Homebrew))
   Type "help" for help.

   wordcloud=#
   ```

1. Inside this prompt, create a new table by pasting the following text, then pressing `Enter`.

   ```sql
   CREATE TABLE words (item VARCHAR(255) PRIMARY KEY, count INT NOT NULL);
   ```

   If you type `\d words` at the prompt, you should see the following output:

   ```sql
                          Table "public.words"
    Column |          Type          | Collation | Nullable | Default
   --------+------------------------+-----------+----------+---------
    item   | character varying(255) |           | not null |
    count  | integer                |           | not null |
   Indexes:
       "words_pkey" PRIMARY KEY, btree (item)
   ```

   You can now exit the PostgresQL shell by typing `\q`, or pressing `Ctrl + D`.

1. Then, open a new terminal window.
   Set the environment variable `FLY_PG_PROXY_CONN_STRING` to your PostgresQL connection string.
   If you followed the steps above, the following command will work:

   ```bash
   export FLY_PG_PROXY_CONN_STRING="postgres://localhost:5432/wordcloud"
   ```

1. Run the web app:

   ```bash
   brew install npm
   npm install
   npm run dev
   ```

1. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
   It's likely that you will need to enter some data before the word cloud shows up.

1. Once you're done using it, you can stop the PostgresQL server by `cd`ing to the `db` directory described above, and running `pg_ctl stop -D .`
