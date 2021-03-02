import React, { Component } from 'react'

export class Skills extends Component {
    render() {
        if(this.props.data){
            var show_skill = []
            for (let [skill_index, skill] of this.props.data.skills.entries()) {
                let con = []
                for (let [index, sk] of skill.content.entries()) {
                    con.push(<li className="text-left" key={index}>{sk}</li>)
                }
                show_skill.push(
                    <div className="col-md-4" key={skill_index}>
                         <span className="fa-stack fa-4x">
                             <i className="fas fa-circle fa-stack-2x text-primary"></i>
                             <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                         <h4 className="my-3">{skill.name}</h4>
                        <p className="text-muted">{con}</p>
                    </div>
                )
            }
        }
        return (
            <section className="page-section" id="skills">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">SKILLS</h2>
                        <h3 className="section-subheading text-muted">What I Can.</h3>
                    </div>
                    <div className="row text-center">
                        {show_skill}
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills