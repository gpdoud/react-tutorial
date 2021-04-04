import React from 'react';
// import ReactDOM from 'react-dom';
import './menu.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: 'Menu' }
    }

    render() {
        return (
            <nav id="component">
                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="#top">Help</a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;