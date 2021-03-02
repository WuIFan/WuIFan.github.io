import React, { Component } from 'react'

export class About extends Component {
    render() {
        if(this.props.data){
            var show_edu = [];
            let inv = false;
            for(let [index, edu] of this.props.data.schools.entries()) {
                let invclass = ""
                if(inv) {
                    invclass ="timeline-inverted"
                }
                inv = !inv
                show_edu.push(
                    <li className={invclass} key={index}>
                        <div className="timeline-image"><i className="fas fa-graduation-cap fa-stack-2x"></i></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>{edu.years}</h4>
                                <h4 className="subheading">{edu.degree}</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">{edu.title}</p></div>
                        </div>
                    </li>
                )
            }
        }
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">My exprence.</h3>
                    </div>
                    <ul className="timeline">
                        {show_edu}
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Now
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default About