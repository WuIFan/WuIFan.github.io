import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);
    }
    render() {
        const element = (
            <div>
                <h2 id = "time">Time now : {this.state.time.toLocaleTimeString()}</h2>
            </div>
          );
        return (
            element
        )
    }
    componentDidMount() {
        this.tickID = setInterval(this.tick,1000);
    }
    componentWillUnmount() {
        clearInterval(this.tickID);
    }
    tick() {
        this.setState({time: new Date()});
    }
}

export default Timer;
