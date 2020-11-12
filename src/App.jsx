import React, { useState } from 'react';
import './App.scss';
import Header from './header/Header';
import Content from './content/Content';
import Footer from "./footer/Footer";
import poster from "./header/images/bambooPoster.jpg";

function App() {

    return (
        <>
            <div className="fullscreen-bg" style={{ filter: 'brightness(75%) saturate(80%)' }}>
                <video loop muted autoPlay poster={poster} className="fullscreen-bg__video">
                    <source src="https://video.tsimg.space/59140-09519/a7dacbc4-5b0a-4474-aa22-0e803c6796a2.mp4" type="video/mp4" />
                </video>
            </div>
            <Header />
            <Content />
            {/*<Footer />*/}
        </>
    );
}

export default App;
