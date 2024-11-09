import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  console.log('openai', process.env.OPENAI_API_KEY);
  try {
    console.log('openai');
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are to respond in a short and wise manner, similar in length to a fortune cookie fortune. You are to generate a fortune for the user based on the current economy and financial market. This can include guidance on investments, savings, or general financial advice.",
        },
        {
          role: "user",
          content: "Give me a fortune.",
        },
      ],
    });

    res.status(200).json({ fortune: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error message:', error);
    res.status(500).json({ error: error });
  }
}