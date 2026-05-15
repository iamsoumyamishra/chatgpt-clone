import Groq from "groq-sdk"

const api_key: string = process.env.GROQ_API_KEY!;
const groq = new Groq({
    apiKey: api_key
});

export async function GroqCompletions(body: any) {

    const res = await groq.chat.completions.create({
        messages: body,
        model: "openai/gpt-oss-20b"
    })
    return res;
}