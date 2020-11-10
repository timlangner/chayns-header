import React, {useEffect, useState} from 'react';
import './header.scss';
import bamboo from './images/bamboo.png';
import Navbar from "../navbar/Navbar";

const Header = () => {
    const [headerOffset, setHeaderOffsetTop] = useState(1);
    const [isSticky, setIsSticky] = useState(false);
    const [prev, setPrev] = useState(window.scrollY);

    useEffect(() => {
        setPrev(window.scrollY);
        window.addEventListener('scroll', e => handleNavigation(e));
    }, []);

    const handleNavigation = (e) => {

        // GET SCROLL DIRECTION
        // const window = e.currentTarget;
        //
        // console.log('prev', prev);
        // if (prev > window.scrollY) {
        //     console.log('scrolling up');
        // } else if (prev < window.scrollY) {
        //     console.log('scrolling down');
        // }
        //
        // console.log('before setPrev', window.scrollY);
        // setPrev(window.scrollY);

        console.log('currentPageYOffset', window.pageYOffset);
        if (window.pageYOffset < 40) {
            console.log('animate back');
            if (window.pageYOffset);
        }
        if (window.pageYOffset > headerOffset) {
            setIsSticky(true);
        } else if (window.pageYOffset < 20) {
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
