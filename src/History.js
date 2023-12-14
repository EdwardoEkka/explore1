
import React from 'react';
import Header from './Header';
import Footer from './footer';
import wind from './pic/History.png';
import './page.css';

function History() {
    return (
        <div>
                    <Header />
            <div id="page">
                <div id="main-container">
                    <div id="sub-container">
                        <div id="sub-container_1">
                            <div id="txt"> The history of Indian independence is a complex and multifaceted story that spans several decades and involves various political, social, and cultural movements.</div>
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

export default History;

