import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);
    }
    render() {
        const element = (
            <React.Fragment>
                <h6 id = "time">{this.state.time.toLocaleTimeString()}</h6>
            </React.Fragment>
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
