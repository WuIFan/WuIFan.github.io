import {hot} from 'react-hot-loader'
import React from 'react'
import Timer from './timer'
import Profile from './profile'

class App extends React.Component {
    render() {
        return (
            <div>
                <Timer />
                <Profile />
            </div>   
        )
    }
}

export default hot(module)(App);
