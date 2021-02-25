import React, { Component } from 'react'
import Timer from './timer'
import '../style/header.scss'

export class header extends Component {
    render() {
        return (
            <frameElement>
                <div className = "header">
                    <h1>About Me</h1>
                    <Timer />
                </div>
                <div className = "bg">
                    <label  className = "switch">
                        <input type = "checkbox"></input>
                        <span className = "slider"></span>
                    </label>
                </div>  
            </frameElement>
            
        )
    }
}
export default header
