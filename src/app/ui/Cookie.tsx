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
        const button = document.getElementById('fortuneButton');
        if (button) {
            (button as HTMLButtonElement).disabled = true;
        }
        setHasClicked(true);
        console.log('clicked');
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
            console.log('here');
            setCurrentImage('/images/fortuneCookieAnim3.gif');
        } catch (error) {
            console.error('Failed to fetch fortune:', error);
            setCurrentImage('/images/justthecookie.png');
        }
    };
  
    return (
        <div>
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{fortune}</p>
            <button onClick={getFortune} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' id='fortuneButton'>
                <img 
                    src={currentImage} 
                    alt="cookie" 
                    className={`${currentImage === '/images/fortuneCookieAnim3.gif' ? 'fade-out' : ''} max-h-72`}
                />
            </button>
            
        </div>
    );
};