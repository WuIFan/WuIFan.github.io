import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        const style = {
            overflow: 'auto'
        }
        if(this.props.data){
            var show_project = this.props.data.projects.map(function(projects,index){
                return (
                    <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href={"#portfolioModal"+(index+1)}>
                                <img className="img-fluid" src={projects.picture} alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">{projects.name}</div>
                                <div className="portfolio-caption-subheading text-muted">{projects.tool}</div>
                            </div>
                        </div>
                    </div>
                    )
                })
            var show_modal = this.props.data.projects.map(function(projects,index){
                return (
                    <div className="portfolio-modal modal fade" key={index} id={"portfolioModal"+(index+1)} tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="modal-body">
                                                <h2 className="text-uppercase" style={style}>{projects.name}</h2>
                                                <p className="item-intro text-muted">{projects.tool}</p>
                                                <img className="img-fluid d-block mx-auto" src={projects.picture} alt="" />
                                                <p>{projects.description}</p>
                                                <ul className="list-inline">
                                                    <li>Website: {projects.website}</li>
                                                </ul>
                                                <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i className="fas fa-times mr-1"></i>
                                                    Close Project
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (
            <section className="page-section bg-light" id="projects">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Projects</h2>
                        <h3 className="section-subheading text-muted">What I do.</h3>
                    </div>
                    <div className="row">
                        {show_project}
                    </div>
                </div>
                {show_modal}
            </section>
        )
    }
}

export default Projects