import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        if(this.props.data){
            var show_project = this.props.data.projects.map(function(projects,index){
                return (
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href={"#portfolioModal"+(index+1)}>
                                <img class="img-fluid" src={projects.picture} alt=""/>
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">{projects.name}</div>
                                <div class="portfolio-caption-subheading text-muted">{projects.tool}</div>
                            </div>
                        </div>
                    </div>
                    )
                })
            var show_modal = this.props.data.projects.map(function(projects,index){
                return (
                    <div class="portfolio-modal modal fade" id={"portfolioModal"+(index+1)} tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <div class="modal-body">
                                                <h2 class="text-uppercase">{projects.name}</h2>
                                                <p class="item-intro text-muted">{projects.tool}</p>
                                                <img class="img-fluid d-block mx-auto" src={projects.picture} alt="" />
                                                <p>{projects.description}</p>
                                                <ul class="list-inline">
                                                    <li>Website: {projects.website}</li>
                                                </ul>
                                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                                    <i class="fas fa-times mr-1"></i>
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
            <section class="page-section bg-light" id="projects">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Projects</h2>
                        <h3 class="section-subheading text-muted">What I do.</h3>
                    </div>
                    <div class="row">
                        {show_project}
                    </div>
                </div>
                {show_modal}
            </section>
        )
    }
}

export default Projects