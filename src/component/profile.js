import React,{Component} from 'react'
import '../style/profile.scss'
import logo from '../image/quam.jpg';

class Profile extends Component {
    state = {
        me: {
            name : "Wu I Fan",
            email : "denny91002@gmail.com",
            photo : logo,
            doing : [
                {
                    content : 'Learning React, SCSS, Webpack through this website'
                },
                {
                    content : 'Learning JavaScript, HTML DOM and Software Engineering in Lab' 
                },
                {
                    content : 'Learning web crawler with Python for hobby'
                }
            ]
        }
    };
    render() {
        return (
            <div className = "profile">
                <Photo photo = {this.state.me.photo} />
                <h1 className = "name">{this.state.me.name}</h1>
                <h2 className = "email">{this.state.me.email} </h2>   
                <Info doing = {this.state.me.doing} /> 
            </div>
            
        )
    }
}

class Photo extends Component {
    render() {
        return (
            <div className="photo">
                <img src={this.props.photo} alt="cool" />
            </div>
        )
    }
}

class Info extends Component {
    list = (doing) => {
        return doing.map(function(does,index){
            return(
              <li key={index} >
                  {does.content}
              </li>
            )
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.list(this.props.doing)}
                </ul>
            </div>
        )
    }
}

export default Profile;
