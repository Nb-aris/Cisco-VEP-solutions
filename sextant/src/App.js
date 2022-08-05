import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant GUI" />
                <Exhibit name="Exhibit1"></Exhibit>
                <Exhibit name="Exhibit2"></Exhibit>
                <Exhibit name="Exhibit3"></Exhibit>
            </div>
        );
    }
}

export default App;
