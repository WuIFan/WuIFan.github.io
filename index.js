import React from 'react'

// ReactDOM.render(<p />, document.getElementById('root'))

// var HelloMessage = React.createClass({
//     render: function() {
//         return <div> Hello World</div>
//     }
// },mountNode=document.getElementById('app'));

// React.render(<HelloMessage />, mountNode);
var HelloMessage = React.createClass({
    displayName: "HelloMessage",
    render: function() {
      return React.createElement("div", null, "Hello World ", null);
    }
  }),mountNode=document.getElementById('app');

React.render(React.createElement(HelloMessage, null), mountNode);