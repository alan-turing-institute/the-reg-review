import { addData } from "$lib/server/db";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { text } = await request.json();
    
    console.log("adding new word: ", text);
    const newWords = await addData("programming", text);
    return json(newWords);
};
