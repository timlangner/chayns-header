import React, {useEffect, useState} from 'react';
import './header.scss';
import bamboo from './images/bamboo.png';
import Navbar from "../navbar/Navbar";

const Header = () => {
    const [headerOffset, setHeaderOffset] = useState(1);
    const [isSticky, setIsSticky] = useState(false);
    const [prevValue, setPrevValue] = useState(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', e => handleNavigation(e));
    }, []);

    const handleNavigation = (e) => {
        if (window.pageYOffset > headerOffset && prevValue < window.pageYOffset) {
            console.log('isSticky');
            console.log('current Offset', window.pageYOffset);
            console.log('prevValue', prevValue);
            // setPrevValue(window.pageYOffset);
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }

    return (
        <>
            <div className={ isSticky ? 'sticky' : null} style={{ zIndex: '100' }}>
                <div className={ isSticky ? 'decreaseHeaderHeight' : 'increaseHeaderHeight' }>
                    <div className={ isSticky ? 'imageCentererAnimation' : 'imageCentererBackAnimation' }>
                        <img src={bamboo} alt="logo" />
                    </div>
                </div>
                <Navbar />
            </div>
            {/*<div className="fakeHeader" style={isSticky ? { display: 'block' } : null} />*/}
        </>
    );
};

export default Header;
