"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ReactDOM.render(<p />, document.getElementById('root'))

// var HelloMessage = React.createClass({
//     render: function() {
//         return <div> Hello World</div>
//     }
// },mountNode=document.getElementById('app'));

// React.render(<HelloMessage />, mountNode);
var HelloMessage = _react2.default.createClass({
  displayName: "HelloMessage",
  render: function render() {
    return _react2.default.createElement("div", null, "Hello World ", null);
  }
}),
    mountNode = document.getElementById('app');

_react2.default.render(_react2.default.createElement(HelloMessage, null), mountNode);
