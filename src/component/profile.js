import React from 'react'

class Profile extends React.Component {
    state = {
        me: {
            name : "Wu I Fan",
            email : "denny91002@gmail.com"
        }
    };
    render() {
        return (
            <div className = "profile">
                <li>name:{this.state.me.name}</li>
                <li>email:{this.state.me.email} </li>    
            </div>
            
        )
    }
}

export default Profile;
