import React from 'react';
// import ReactDOM from 'react-dom';
import './content.css';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = { about: 'Content' }
    }

    render() {
        return (
            <p>{this.state.about} component</p>
        );
    }
}

export default Content;