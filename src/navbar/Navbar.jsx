import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import './navbar.scss';

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="navbar-items">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white', transform: 'scale(1.3)' }} />

                    <div className="navbar-pages mar-left--25">

                        <div className="selectedPage">
                            <p className="selected mar-left--25">Shutdown</p>
                            <div className="selectedBar" />
                        </div>
                        <p className="page mar-left--25">Gutscheine</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
