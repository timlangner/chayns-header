import React, {useEffect, useRef, useState} from 'react';
import './header.scss';
import bamboo from './images/bamboo.png';
import Navbar from "../navbar/Navbar";

const Header = () => {
    const [headerOffset, setHeaderOffset] = useState(1);
    const [isSticky, setIsSticky] = useState(false);
    const [currentOffset, setCurrentOffset] = useState(0);

    console.log(currentOffset);

    useEffect(() => {
        window.addEventListener('scroll', e => handleScroll(e));
    }, []);

    const handleScroll = (e) => {
        setCurrentOffset(window.pageYOffset);
    }

    return (
        <>
            <div className="sticky">
                <div className='header' style={ currentOffset <= 40 ? { height: `${100 - currentOffset}px` } : { height: '60px' }}>
                    <div className='image-wrapper' style={ currentOffset < 40 ? {top: `${5 - currentOffset / 1.6}%`} : {top: '-20%'}}>
                        <img src={bamboo} alt="logo"style={ currentOffset < 40 ? {transform: `scale(${0.7 - ((currentOffset / 100) / 2)})`} : {transform: 'scale(0.5)'} }/>
                    </div>
                </div>
                <Navbar />
            </div>
        </>
    );
};

export default Header;
