import { NextResponse, type NextRequest } from "next/server";

import { generateObject } from 'ai';
import { openrouter } from "@/ia/open-router";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const result = await generateObject({
    model: openrouter.chat('openai/gpt-4o-2024-11-20'),
    schema: z.object({
      pt: z.string().describe('Tradução para português'),
      fr: z.string().describe('Tradução para francês'),
      es: z.string().describe('Tradução para espanhol')
    }),
    prompt: 'Traduza "Hello Word" para diferentes idiomas!',
    system: 'Você é uma IA especializa em tradução, sempre retorne de maneira mais sucinta possível.',
  })

  return NextResponse.json({ message: result.object })
}
