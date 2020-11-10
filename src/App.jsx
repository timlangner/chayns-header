import React, { useState } from 'react';
import './App.scss';
import Header from './header/Header';
import SampleText from "./sampleText/SampleText";
import Content from './content/Content';
import Footer from "./footer/Footer";

function App() {

    return (
        <div>
            <Header />
            <Content />
            {/*<SampleText />*/}
            {/*<Footer />*/}
        </div>
    );
}

export default App;
