<script lang="ts">
    import { onMount } from "svelte";
    import WordCloud from "./WordCloud.svelte";

    let words = [
        {text: "placeholder", count: 1},
    ];
    let submission: string = "";
    let submissionInput: HTMLInputElement;
    const maxTimer = 5;

    function invalidate(placeholder: string) {
        submissionInput.placeholder = placeholder;
        submissionInput.style.transition = "";
        submissionInput.value = "";
        submissionInput.style.backgroundColor = "#ffccdb";
        setTimeout(() => {
            submissionInput.style.transition = "background-color 0.5s";
            submissionInput.style.backgroundColor = "white";
        }, 100);
        setTimeout(() => {
            submissionInput.placeholder = "Enter a word...";
        }, 600);
    }

    async function submitWord() {
        const rgx = /drop\s+table/i;
        if (rgx.test(submission)) {
            alert("Nice try, but my SQL inputs are thoroughly sanitised.");
        }

        if (submission === "") {
            return;
        }

        // Sanitise input
        submission = submission
            .toLowerCase()
            .trim()
            .split(/\s+/).join("-")
            .replace(/[^a-z0-9-_.]/g, "");

        if (submission === "") {
            invalidate("invalid character in input");
            return;
        }

        if (localStorage.getItem(`wordcloud___${submission}`) === "true") {
            invalidate("already submitted");
            return;
        } else {
            localStorage.setItem(`wordcloud___${submission}`, "true");
        }

        const response = await fetch("/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text: submission}),
        });
        words = await response.json();
        timer = maxTimer;
        submission = "";
    }

    async function getWords() {
        const response = await fetch("/ask");
        words = await response.json();
        // Print to console so that it's easy to get hold of the data if we need to replot
        let s = [];
        for (const {text, count} of words) {
            for (let i = 0; i < count; i++) {
                s.push(text);
            }
        }
        console.log(s.join(" "));
    }

    let timer = maxTimer;

    onMount(async () => {
        await getWords();
        setInterval(async () => {
            timer -= 1;
            if (timer <= 0) {
                await getWords();
                timer = maxTimer;
            }
        }, 1000);
    });

    let totalWords: number;
    $: {
        totalWords = words.map((word) => word.count).reduce((a, b) => a + b, 0);
    }
</script>

<svelte:head>
    <title>A word cloud...</title>
</svelte:head>

<div id="wrapper-wrapper">
    <h1>Hello, another REG survey</h1>

    <div id="wrapper">
        <div id="input-form">
            <p>Please type in any programming languages or technologies you have used in your time in REG.</p>
            <p>This can include not-entirely-serious-work things, such as Hack Week projects!</p>

            <form on:submit|preventDefault={async () => submitWord()}>
                <input id="submission" type="text" placeholder="Enter a word..."
                    bind:this={submissionInput}
                    bind:value={submission} />
                <button id="submit">Submit</button>
            </form>

            <p>The word cloud on the right automatically updates whenever you submit a word, or {maxTimer} seconds after the last update, whichever comes first. <span class="smaller">(Next refresh in: {timer} seconds)</span></p>

            <p>So far, this word cloud has received {totalWords} submissions. Apologies if it doesn't look right; the word cloud generation library I'm using isn't very good.</p>

            <p>Thank you, <br />- Penny &lt;3</p>
        </div>
        <div id="cloud">
            {#key JSON.stringify(words)}
                <WordCloud words={words} width={450} height={350} />
            {/key}
        </div>
    </div>
</div>

<style>
    div#wrapper-wrapper {
        height: 100vh;
        width: calc(100vw - 100px);
        margin: 20px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div#wrapper {
        display: flex;
        width: max-content;
        max-width: 100%;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
    div#input-form {
        width: 400px;
        max-width: 400px;
    }
    div#input-form p {
        font-size: 1.1em;
    }
    div#cloud {
        border: 1px solid black;
    }
    input#submission {
        font-family: monospace;
        font-size: 1.5em;
        width: 100%;
    }
    button#submit {
        display: none;
    }
    span.smaller {
        font-size: 0.8em;
    }
</style>
