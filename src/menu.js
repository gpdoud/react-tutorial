import React from 'react';
// import ReactDOM from 'react-dom';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: 'Menu' }
    }

    render() {
        return (
            <p>{this.state.about} component</p>
        );
    }
}

export default Menu;