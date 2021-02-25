import {hot} from 'react-hot-loader';
import React from 'react';
import Nav from './nav';
import Header from './header';
import Skills from './skills';
import About from './about';
import Projects from './projects'
import Profile from './profile';
import $ from 'jquery';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profileData: {}
        };
    
      }
    
    getResumeData(){
        $.ajax({
            url:'/profile.json',
            dataType:'json',
            cache: false,
            success: function(data){
                this.setState({profileData: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }
        });
        if(!this.state.profileData) {
            $.ajax({
                url:'/public/profile.json',
                dataType:'json',
                cache: false,
                success: function(data){
                    this.setState({profileData: data});
                }.bind(this),
                error: function(xhr, status, err){
                    console.log(err);
                }
            });
        }
    }

    componentDidMount(){
        this.getResumeData();
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
