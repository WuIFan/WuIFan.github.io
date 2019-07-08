import React from 'react'
import ReactDOM from 'react-dom'

function showTime(){
  const element = (
    <div>
      <h2 id = "time">Time now : {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById("app")
  )
};
setInterval(showTime, 1000);
