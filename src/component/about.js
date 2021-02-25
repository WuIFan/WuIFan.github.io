import React, { Component } from 'react'

export class About extends Component {
    render() {
        if(this.props.data){
            var show_edu = [];
            let inv = false;
            for(let edu of this.props.data.schools) {
                let invclass = ""
                if(inv) {
                    invclass ="timeline-inverted"
                }
                inv = !inv
                show_edu.push(
                    <li className={invclass}>
                        <div class="timeline-image"><i class="fas fa-graduation-cap fa-stack-2x"></i></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>{edu.years}</h4>
                                <h4 class="subheading">{edu.degree}</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">{edu.title}</p></div>
                        </div>
                    </li>
                )
            }
        }
        return (
            <section class="page-section" id="about">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">About</h2>
                        <h3 class="section-subheading text-muted">My exprence.</h3>
                    </div>
                    <ul class="timeline">
                        {show_edu}
                        <li class="timeline-inverted">
                            <div class="timeline-image">
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