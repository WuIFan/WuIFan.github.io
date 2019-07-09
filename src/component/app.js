import {hot} from 'react-hot-loader'
import React from 'react'
import Header from './header'
import Profile from './profile'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Profile />
            </div>   
        )
    }
}

export default hot(module)(App);
