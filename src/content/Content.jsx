import React from 'react';
import './Content.scss';
import SampleText from "../sampleText/SampleText";

const Content = () => {
    return (
        <>
            <div className="content-centerer">
                <div className="content-wrapper">
                    <div className="headline">
                        „Vermögen werden in der Krise gemacht.“
                    </div>
                    <div>
                        <b>Es tut uns leid.</b> Auch wir müssen in diesen Tagen unsere Türen geschlossen halten. Als kleines Trostpflaster bieten wir auch während der doofen Zeit Gutscheine an, bei denen wir euch 10% oben drauf legen. Und die könnt ihr direkt wieder einlösen, wenn wir unseren Türen wieder öffnen dürfen! Denn ihr wisst ja: Auch ein Lockdown ist irgendwann vorbei. Und dann sind wir sofort wieder da. Versprochen!
                    </div>
                    <div className="buttonWrapper">
                        <button className="button" style={{ backgroundColor: '#79C23D' }}>Gutscheine</button>
                    </div>
                </div>
                <div style={{ height: '2000px' }} />
            </div>
        </>
    );
};

export default Content;
