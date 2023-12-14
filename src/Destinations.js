
import React from 'react';
import Header from './Header';
import Footer from './footer';
import wind from './pic/Destinations.png';
import './page.css';

function Destinations() {
    return (
        <div>
            <Header />
            <div id="page">
                <div id="main-container">
                    <div id="sub-container">
                        <div id="sub-container_1">
                            <div id="txt">
                                The Taj Mahal is one of the most iconic and celebrated architectural marvels in the world. It is located in Agra, India, and is renowned for its exquisite beauty and historical significance. </div>
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

export default Destinations;

