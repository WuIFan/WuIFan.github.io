import React from 'react'

var me = {
    name : "Wu I Fan",
    email : "denny91002@gmail.com"
}
class Profile extends React.Component {
    render() {
        return (
            <div className = "profile">
                <li>name:{me.name}</li>
                <li>email:{me.email} </li>    
            </div>
            
        )
    }
}

export default Profile;
