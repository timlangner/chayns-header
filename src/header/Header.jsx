import React, {useEffect, useState} from 'react';
import './header.scss';
import bamboo from './images/bamboo.png';
import Navbar from "../navbar/Navbar";

const Header = () => {
    const [headerOffset, setHeaderOffset] = useState(1);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', e => handleNavigation(e));
    }, []);

    const handleNavigation = (e) => {
        if (window.pageYOffset > headerOffset) {
            console.log('first');
            console.log('headerOffset', headerOffset);
            setIsSticky(true);
        } else {
            console.log('second');
            setIsSticky(false);
        }
    }

    return (
        <>
            <div className={ isSticky ? 'sticky' : null}>
                <div className={ isSticky ? 'decreaseHeaderHeight' : 'increaseHeaderHeight' }>
                    <div className={ isSticky ? 'imageCentererAnimation' : 'imageCentererBackAnimation' }>
                        <img src={bamboo} alt="logo" />
                    </div>
                </div>
                <Navbar />
            </div>
            <div className="fakeHeader" style={isSticky ? { display: 'block' } : null}/>
        </>
    );
};

export default Header;
