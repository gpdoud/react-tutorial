import React from 'react';
// import ReactDOM from 'react-dom';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: 'Footer' }
    }

    render() {
        return (
            <p>{this.state.about} component</p>
        );
    }
}

export default Footer;