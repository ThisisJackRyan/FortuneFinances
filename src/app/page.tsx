"use client";

import Cookie from "./ui/Cookie";
import SideBar from "./ui/SideBar";
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  
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
        <button onClick={getFortune}>Get Fortune</button>
        <Cookie/>
        <p className="fortuneResult">{fortune}</p>
      </div>
      <div className=" absolute top-0 p-4 text-2xl historyButton">
        <FontAwesomeIcon icon={faClockRotateLeft}  onClick={toggleSidebar} className={isSidebarVisible ? 'hidden' : 'visible'}/>
        <SideBar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar }/>
      </div>
    </div>
  );
}