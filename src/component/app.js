import {hot} from 'react-hot-loader';
import React from 'react';
import Nav from './nav';
import Header from './header';
import Skills from './skills';
import About from './about';
import Projects from './projects'
import profile_data from './profile_data'
import Profile from './card';
// import $ from 'jquery';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profileData: {}
        };
    
      }
    
    // getResumeData(){
    //     $.ajax({
    //         url:'/profile.json',
    //         dataType:'json',
    //         cache: false,
    //         success: function(data){
    //             this.setState({profileData: data});
    //         }.bind(this),
    //         error: function(xhr, status, err){
    //             console.log(err);
    //         }
    //     });
    // }

    componentDidMount(){
        this.setState({profileData: profile_data});
    }
    render() {
        return (
            <div>
                <Nav/>
                <Header data={this.state.profileData.main}/>
                <Skills data={this.state.profileData.main}/>
                <About data={this.state.profileData.main}/>
                <Projects data={this.state.profileData.main}/>
            </div>   
        )
    }
}

export default hot(module)(App);
