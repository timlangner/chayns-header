import React from 'react';
import chayns from '../images/chayns-logo-long.png';
import bambooLogo from '../images/bambooLogo.png';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="pages-footer">
                <div className="company-info">
                    <div className="company-logo">
                        <img src={bambooLogo} alt="bamboo-logo" />
                    </div>
                    <div className="company-address">
                        <p>BamBoo! Ahaus</p>
                        <p>Parallelstraße 46</p>
                        <p>48683 Ahaus</p>
                    </div>
                </div>
                <div className="pages">
                    <p>Shutdown</p>
                    <p>Gutscheine</p>
                </div>
            </div>
            <div className="chayns-footer">
                <div className="logo-wrapper">
                    <img src={chayns} alt="chayns-logo" />
                </div>
                <div className="privacy-wrapper">
                    <a className="privacy-wrapper__item" href="javascript:void(0)">Impressum</a>
                    <a className="privacy-wrapper__item" href="javascript:void(0)">Datenschutz</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
