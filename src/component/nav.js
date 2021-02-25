import React, { Component } from 'react'
import Timer from './timer'

export class Nav extends Component {

    
    render() {
        return (
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                  <div className="container">
                      <a className="navbar-brand js-scroll-trigger" href="#page-top">Home</a>
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
}
export default Nav
