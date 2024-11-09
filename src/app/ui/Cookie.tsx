import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { url } from 'inspector';
import { useUser } from '@auth0/nextjs-auth0/client';


import { db } from '../../config/firebase-config';
import { addDoc, doc, getDoc , updateDoc, collection } from 'firebase/firestore';

export default function Cookie() {

    const [hasClicked, setHasClicked] = useState(false);
    const [awaitingAPI, setAwaitingAPI] = useState(false);
    const [currentImage, setCurrentImage] = useState('/images/justthecookie.png');
    const [apiResponse, setApiResponse] = useState(null);
    const [isFadeOutComplete, setIsFadeOutComplete] = useState(false);
    const [enableButton, setEnableButton] = useState(false);

    const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));


    useEffect(() => {
        if (currentImage === '/images/fortuneCookieAnim3.gif') {
          const timer = setTimeout(() => {
            setIsFadeOutComplete(true);
          }, 1000); // 1 second to match the CSS transition duration
    
          return () => clearTimeout(timer);
        } else {
          setIsFadeOutComplete(false);
        }
      }, [currentImage]);

    const handleClick = async () => {
        setEnableButton(true);
        setHasClicked(true);
        setAwaitingAPI(true);
    };

    const [fortune, setFortune] = useState('');

    const getFortune = async () => {
        handleClick();
        setCurrentImage('/images/fortuneCookieAnim1.gif');
        await delay(1410);
        setCurrentImage('/images/fortuneCookieAnim2.gif');
        try {
            const response = await fetch('/api/openai-api');
            const data = await response.json();
            await delay(2000);
            setFortune(data.fortune);
            setAwaitingAPI(false);
            setCurrentImage('/images/fortuneCookieAnim3.gif');

            addFortune(data.fortune);

            
        } catch (error) {
            console.error('Failed to fetch fortune:', error);
            setCurrentImage('/images/justthecookie.png');
            setAwaitingAPI(false);
        }
        setHasClicked(false);
    };

    const { user, error, isLoading } = useUser();

    async function addFortune(fortune: string = '') {
        if (user && fortune !== '') {
            await addDoc(collection(db, "history"), {
                dateReceived: new Date(),
                fortune: fortune,
                userId: user.sub,
                userInput: "",
            });
        }
    }
  
    return (
        <div>
            <p className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 paper'>{fortune}</p>
            <button disabled={enableButton} onClick={getFortune} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' id='fortuneButton'>
                <img 
                    src={currentImage} 
                    alt="cookie" 
                    className={`${currentImage === '/images/fortuneCookieAnim3.gif' ? 'fade-out' : ''} ${ isFadeOutComplete && fortune !== '' ? 'hidden' : ''} max-h-72`}
                />
            </button>

            <button className={`${fortune !== "" ? 'block' : 'opacity-0'}`} onClick={ () => {
                setFortune('');
                setEnableButton(false);
                setIsFadeOutComplete(false);
                setCurrentImage('/images/justthecookie.png');
            }}>
                Give me another fortune
            </button>
        </div>
    );
};