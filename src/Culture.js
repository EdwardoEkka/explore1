
import React from 'react';
import Header from './Header';
import Footer from './footer';
import wind from './pic/Culture.png';
import './page.css';

function Culture() {
    return (
        <div>
              <Header />
            <div id="page">
                <div id="main-container">
                    <div id="sub-container">
                        <div id="sub-container_1">
                            <div id="txt"> Holi is a vibrant and lively spring festival celebrated with great enthusiasm in India and other parts of the world.</div>
                            <br></br>
                        </div>
                        <div id="sub-container_2">
                            <img id="windy" src={wind} alt="wind"></img>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <footer>

                <Footer />
            </footer> 

        </div>
    )
}

export default Culture;

