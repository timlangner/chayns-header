import React, { useState } from 'react';
import './App.scss';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import SampleText from "./sampleText/SampleText";

function App() {

    return (
        <div>
            <Header />
            <SampleText />
        </div>
    );
}

export default App;
