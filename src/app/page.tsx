"use client";

import Cookie from "./ui/Cookie";
import { useState } from 'react';

export default function Home() {
  const [fortune, setFortune] = useState('');

  const getFortune = async () => {
    try {
      const response = await fetch('/api/openai-api');
      const data = await response.json();
      setFortune(data.fortune);
    } catch (error) {
      console.error('Failed to fetch fortune:', error);
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="text-center text-4xl">Fortune Finances</div>
        <Cookie />
        <button onClick={getFortune}>Get Fortune</button>
        <p className="fortuneResult">{fortune}</p>
      </div>
    </div>
  );
}