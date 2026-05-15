import { NextResponse, NextRequest } from "next/server"
import { GroqCompletions } from "@/lib/groq"
import { z } from "zod"


const messageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string().min(1),
})

const schema = z.object({
  prompt: z.array(messageSchema).min(1),
})

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, msg: "Invalid JSON" },
      { status: 400 }
    )
  }

  const result = schema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { success: false, msg: "prompt is required" },
      { status: 400 }
    )
  }

  const { prompt } = result.data

  try {
    const response = await GroqCompletions(prompt)
    return NextResponse.json({ success: true, data: { response } })
  } catch {
    return NextResponse.json(
      { success: false, msg: "Groq request failed" },
      { status: 500 }
    )
  }
}