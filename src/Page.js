
import React from 'react';
import './page.css';
import wind from './india.png';


function HappyPage() {
    return (
        <div>
            <div id="page">
                <div id="main-container">
                    <div id="sub-container">
                        <div id="sub-container_1">
                            <div id="txt"> Discover the kaleidoscope of India, where tradition meets modernity,
                                and history meets the future</div>
                            <br></br>
                            <div><button id="btn">Explore India</button></div>
                        </div>
                        <div id="sub-container_2">
                            <img id="windy" src={wind} alt="wind"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HappyPage;

