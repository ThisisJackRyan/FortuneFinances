"use client";

import Cookie from "./ui/Cookie";
import SideBar from "./ui/SideBar";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '@auth0/nextjs-auth0/client';


//import { db } from '../config/firebase-config';
//import { addDoc, doc, getDoc , updateDoc, collection } from 'firebase/firestore';

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log(user);
  };

  const { user, error, isLoading } = useUser();
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="text-center text-4xl">Fortune Finances</div>
        <Cookie />
      </div>
      <div className=" absolute top-0 p-4 text-2xl historyButton">
        <FontAwesomeIcon icon={faClockRotateLeft}  onClick={toggleSidebar} className={isSidebarVisible ? 'hidden' : 'visible'}/>
        <SideBar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar } user={user}/>
      </div>
      <div className=" absolute top-0 right-0 p-4 text-2xl historyButton">
        <div className="flex">
          {
            user ? (
              <div className="flex gap-4 justify-center items-center">
                <a href="/api/auth/logout" className="text-sm">Logout</a>
                <img src={user.picture ?? ''} alt={user.name ?? 'User'}  className="rounded-full flex" height="32" width="32"/>
              </div>
            ) : (
              <div className="flex gap-4 justify-center items-center">
                <a href="/api/auth/login"  className="text-sm">Login </a>
                <circle className="rounded-full flex h-8 w-8" />
              </div>
            )
          }
        </div>
        <div className="flex"></div>
        <div className="flex"></div>
      </div>
    </div>
  );
}