
import React from 'react';
import Header from './Header';
import Footer from './footer';
import wind from './pic/Food.png';
import './page.css';

function Food() {
    return (
        <div>
                    <Header />
            <div id="page">
                <div id="main-container">
                    <div id="sub-container">
                        <div id="sub-container_1">
                            <div id="txt">Samosa is a popular and savory pastry that originated in South Asia but has gained international popularity. It is a versatile and delicious snack enjoyed by people from various cultural backgrounds.</div>
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

export default Food;

