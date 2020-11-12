import React from 'react';
import chayns from '../images/chayns-logo-long.png';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="pages-footer">
                <div className="company-info">
                    <div className="logo">

                    </div>
                </div>
            </div>
            <div className="chayns-footer">
                <div className="logo-wrapper">
                    <img src={chayns} alt="chayns-logo" />
                </div>
                <div className="privacy-wrapper">
                    <a className="privacy-wrapper__item">Impressum</a>
                    <a className="privacy-wrapper__item">Datenschutz</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
