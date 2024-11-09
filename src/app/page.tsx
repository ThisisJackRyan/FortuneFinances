"use client";

import Cookie from "./ui/Cookie";
import SideBar from "./ui/SideBar";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '@auth0/nextjs-auth0/client';
import { db } from '../config/firebase-config';
import { getDocs, collection, query, where } from "firebase/firestore";
import { DocData } from "../config/DocData";



export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [history, setHistory] = useState<DocData[]>([]);

  const { user, error, isLoading } = useUser();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const fetchHistory = async () => {
    if (!user) return;
    const q = query(collection(db, "history"), where("userId", "==", user.sub));
    const querySnapshot = await getDocs(q);
    const temp: DocData[] = [];
    querySnapshot.forEach((doc) =>{
      const data = doc.data();
      temp.push({ 
        id: doc.id, 
        dateReceived: data.dateReceived.toDate(), 
        fortune: data.fortune, 
        userId: data.userId 
      });
    })
    setHistory(temp);
  }

  useEffect(() => {
    fetchHistory();
  }, [user, isSidebarVisible]);
  
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-around h-full">
        <div className="text-center text-4xl mb-5">Fortune Finances</div>
        <div><Cookie /></div>
      </div>
      <div className=" absolute top-0 p-4 text-2xl historyButton">
        <FontAwesomeIcon icon={faClockRotateLeft}  onClick={toggleSidebar} className={isSidebarVisible ? 'hidden' : 'visible'}/>
        <SideBar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar } history={history} />
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
                <div className="rounded-full flex h-8 w-8" />
              </div>
            )
          }
        </div>
      </div>
      <div className="flex flex-col items-center justify-evenly">
        <p className="absolute bottom-0 text-center mb-3">(this is not financial advice)</p>
      </div>
    </div>
  );
}