import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
            <a className="navbar-item">
                    <h1>{this.props.item.name}</h1>
            </a>
        );
    }
}

export default MenuItem;