import React, { Component } from 'react'
// import Timer from './timer'
import $ from 'jquery';

export class Nav extends Component {
      constructor(props) {
        super(props);
        this.state = {hideNav: false};
    }
    render() {
        return (
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                  <div className="container">
                      <a className="navbar-brand js-scroll-trigger" href="#root">Home</a>
                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          Menu
                          <i className="fas fa-bars ml-1"></i>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav text-uppercase ml-auto">
                              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">SKILLS</a></li>
                              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">ABOUT</a></li>
                              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">PROJECTS</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>
        );
    }
    componentDidMount() {
      window.addEventListener('scroll',()=>{
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      })
    }
}
export default Nav
