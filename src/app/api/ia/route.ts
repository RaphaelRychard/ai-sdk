import { NextResponse, type NextRequest } from "next/server";

import { generateText } from 'ai';
import { openrouter } from "@/ia/open-router";

export async function GET(request: NextRequest) {
  const result = await generateText({
    model: openrouter.chat('openai/gpt-4o-mini'),
    prompt: 'Traduza "Hello Word" para português!',
    system: 'Você é uma IA especializa em tradução, sempre retorne de maneira mais sucinta possível.',
  })

  return NextResponse.json({ message: result.text })
}

