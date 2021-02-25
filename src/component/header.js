import React, { Component } from 'react'

export class Header extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var hello = this.props.data.hello
        }
        return (
            <header className="masthead">
                <div className="container">
                    <div className="masthead-heading text-uppercase">{name}</div>
                    <div className="masthead-subheading">{hello}</div>
                </div>
            </header>
        )
    }
}

export default Header