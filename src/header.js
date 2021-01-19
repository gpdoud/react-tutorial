import React from 'react';
// import ReactDOM from 'react-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: 'Header' }
    }

    render() {
        return (
            <p>{this.state.about} component</p>
        );
    }
}

export default Header;