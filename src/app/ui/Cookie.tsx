import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import { url } from 'inspector';


export default function Cookie() {

    const [hasClicked, setHasClicked] = useState(false);
    const [awaitingAPI, setAwaitingAPI] = useState(false);
    const [currentImage, setCurrentImage] = useState('/images/justthecookie.png');
    const [apiResponse, setApiResponse] = useState(null);

    const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

    const handleClick = async () => {
        setHasClicked(true);
        console.log('clicked');
        setAwaitingAPI(true);
    };

    const [fortune, setFortune] = useState('');

    const getFortune = async () => {
        handleClick();
        setCurrentImage('/images/fortuneCookieAnim1.gif');
        setTimeout(() => {
            setCurrentImage('/images/fortuneCookieAnim2.gif');
        }, 1300);
        try {
            const response = await fetch('/api/openai-api');
            const data = await response.json();
            await delay(2000);
            setFortune(data.fortune);
            console.log('here');
            setCurrentImage('/images/fortuneCookieAnim3.gif');
        } catch (error) {
            console.error('Failed to fetch fortune:', error);
            setCurrentImage('/images/justthecookie.png');
        }
    };
  
    return (
        <div>
            <p>
                Cookie Goes Here
            </p>
            <button onClick={getFortune} className='fortuneCookieButton'>
                <img 
                    src={currentImage} 
                    alt="cookie" 
                    className={`${currentImage === '/images/fortuneCookieAnim3.gif' ? 'fade-out' : ''} max-h-72`}
                />
            </button>
            <p>{fortune}</p>
        </div>
    );
};