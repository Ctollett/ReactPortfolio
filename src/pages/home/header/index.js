import React, { useEffect, useState } from 'react';
import './index.css'; 
import globe from '../../../assets/svgs/globe.svg';
import barcode from '../../../assets/svgs/barcode.svg';
import LowPolySpiralLine from '../../../components/HeaderGraphic';
import LoadingScreen from '../../../components/LoadingScreen';

const Header = () => {
    const latitude = 33.92812110258542;
    const longitude = -96.43893946687734;
    const [currentTime, setCurrentTime] = useState(new Date());
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, random: Math.random() });
      const [isLoading, setIsLoading] = useState(true);
    


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        

        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
                random: Math.random().toFixed(2)  // Generates a random number to two decimal places
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);



    return (
        <header>
            <div className='topContainer'>
                <div className='timeLocationInfo'>
                <div className='timeInfo'>
                        <h4>Time:</h4>
                        [{currentTime.toLocaleString()}]
                    </div>
                    <div className='currentLocation'>
                        <h4>Location:</h4>
                        [{latitude}]<br/>
                        [{longitude}]
                    </div>
                    </div>
                <div className='description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='middleContainer'>
            <LowPolySpiralLine/>
            </div>  
            <div className='bottomContainer'>
                <div className='nameInfo'>
                    <h1 id='first'>COLTON</h1>
                    <img id='globe' src={globe}></img>
                    <h1 id='last'>TOLLETT.</h1>
                    <ul>
                        <li>[1] Developer</li>  
                        <li>[2] Designer</li>
                    </ul>
                </div>
                <div className='barcode'>
                    <img src={barcode}></img>
                    <p className='barcode-text'>{mousePosition.x}, {mousePosition.y}, {mousePosition.random}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;

