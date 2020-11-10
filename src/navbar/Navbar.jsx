import React, {useState, useEffect} from 'react';
import './navbar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="navbar-items">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white', transform: 'scale(1.3)' }} />

                    <div className="navbar-pages mar-left--25">
                        <p className="mar-left--25">Shutdown</p>

                        <div className="selectedPage mar-left--25">
                            <p className="selected">Gutscheine</p>
                            {/*<div className="selectedBar" />*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
