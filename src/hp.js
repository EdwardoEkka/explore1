import React, { useState } from 'react';
import './page.css';
import Header from './Header';
import Footer from './footer';
import Page from './Page';
import Culture from './Culture';
import Destinations from './Destinations';
import Food from './Food';
import History from './History';

function HappyPage() {
    const [currentPage, setCurrentPage] = useState('page');

    const renderContent = () => {
        switch (currentPage) {
            case 'page':
                return <Page />;
            case 'culture':
                return <Culture />;
            case 'destinations':
                return <Destinations />;
            case 'food':
                return <Food />;
            case 'history':
                return <History />;
            default:
                return <Page />;
        }
    };

    return (
        <div>
            <Header />
            <main>
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
}

export default HappyPage;
