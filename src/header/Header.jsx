import React, {useEffect, useState} from 'react';
import bamboo from '../images/bamboo.png';
import Navbar from "../navbar/Navbar";
import './header.scss';

const Header = () => {
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
                <div className='header' style={ currentOffset < 55 ? { height: `${100 - currentOffset}px` } : { height: '45px' }}>
                    <div className='image-wrapper'>
                        <img src={bamboo} alt="logo"/>
                    </div>
                </div>
                <Navbar />
            </div>
        </>
    );
};

export default Header;
