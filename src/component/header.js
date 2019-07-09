import React, { Component } from 'react'
import Timer from './timer'
import '../style/header.scss'

export class header extends Component {
    render() {
        return (
            <div className = "header" style = {headerStyle}>
                <h1>My home page</h1>
                <Timer />
            </div>
        )
    }
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center'
}
export default header
