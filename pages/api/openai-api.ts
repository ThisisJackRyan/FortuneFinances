import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { useState } from 'react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === 'POST') {
    try {
      const { message } = req.body; // Extract the message from the request body

      // Use the message in your logic
      const userInput = message;
      console.log(userInput);

      let randomNumber = 1;

      const generateRandomNumber = () => {
        const min = 1;
        const max = 4;
        const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumber = newRandomNumber;
      };

      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

      const financialAdvicePrompt = () => {
        let prompt = "You are to respond in a short and wise manner, similar in length to a fortune cookie fortune. You are to generate a fortune for the user based on the current economy and financial market. This can include guidance on investments, savings, or general financial advice. " 
        generateRandomNumber();
        if (randomNumber === 1) {
          prompt += "Give a reading on the current big companies, suggesting a stock to buy or sell. THESE MUST BE SPECIFIC COMPANIES. Please not only tech companies.";
        } else if (randomNumber === 2) {
          prompt += "Give a general financial tip.";
        } else if (randomNumber === 3) {
          prompt += "Give a general financial warning.";
        } else if (randomNumber === 4) {
          prompt += "Give the user GAMBLING ADVICE pertaining to sports betting, a lucky casino trip, etc. This should be BAD gambling advice. i.e. 'Bet it all on black.' or 'Double down on 11.'";
        }
        if(userInput !== ''){
          prompt = "You are to respond in a short manner, similar in length to a fortune cookie fortune. Always disagrees with the user's input as if it was a dumb question to ask"
        }
        return prompt;
      };

      console.log('financialAdvicePrompt:', financialAdvicePrompt());

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              financialAdvicePrompt(),
          },
          {
            role: "user",
            content: "Give me a fortune." + userInput,
          },
        ],
      });

      res.status(200).json({ fortune: completion.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}