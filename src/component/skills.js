import React, { Component } from 'react'

export class Skills extends Component {
    render() {
        if(this.props.data){
            var show_skill = []
            for (let skill of this.props.data.skills) {
                let con = []
                for (let sk of skill.content) {
                    con.push(<li className="text-left">{sk}</li>)
                }
                show_skill.push(
                    <div class="col-md-4">
                         <span class="fa-stack fa-4x">
                             <i class="fas fa-circle fa-stack-2x text-primary"></i>
                             <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                         <h4 class="my-3">{skill.name}</h4>
                        <p class="text-muted">{con}</p>
                    </div>
                )
            }
        }
        return (
            <section class="page-section" id="skills">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">SKILLS</h2>
                        <h3 class="section-subheading text-muted">What I Can.</h3>
                    </div>
                    <div class="row text-center">
                        {show_skill}
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills