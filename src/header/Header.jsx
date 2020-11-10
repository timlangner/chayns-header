import React, {useEffect, useState} from 'react';
import './header.scss';
import artwork from './images/artwork.png';
import Navbar from "../navbar/Navbar";

const Header = () => {
    const [headerOffset, setHeaderOffsetTop] = useState(1);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        if (headerOffset) {
            window.onscroll = () => {
                stickyHeader();
            }
        }
    }, []);

    const stickyHeader = () => {
        if (window.pageYOffset > headerOffset) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }

    return (

        <div className={ isSticky ? 'sticky' : null}>
            <div className={ isSticky ? 'decreaseHeaderHeight' : 'increaseHeaderHeight' }>
                <div className={ isSticky ? 'imageCentererAnimation' : 'imageCentererBackAnimation' }>
                    <img src={artwork} alt="logo" />
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;
