import React from 'react';
// import ReactDOM from 'react-dom';
import './header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: 'Header' }
    }

    render() {
        return (
            <div id="component">
                <label>Doud Systems, Inc.</label>
            </div>
        );
    }
}

export default Header;