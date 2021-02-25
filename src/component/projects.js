import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        if(this.props.data){
            var show_project = this.props.data.projects.map(function(projects){
                return (
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/01-thumbnail.jpg" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">{projects.name}</div>
                                <div class="portfolio-caption-subheading text-muted">{projects.tool}</div>
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
        </section>
        )
    }
}

export default Projects