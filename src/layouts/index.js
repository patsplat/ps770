import Helmet from 'react-helmet'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

import './all.sass'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
        <title>PS 770-The New American Academy</title>
    </Helmet>

    <header className="py-3 container">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-8">
            <a className="text-dark" href="#">PS 770-The New American Academy</a>
          </div>
          <div className="col-4 d-flex justify-content-end ">
            <a className="btn btn-sm btn-outline-secondary ml-1 fa fa-twitter" href="http://twitter.com/ps770"></a>
            <a className="btn btn-sm btn-outline-secondary ml-1 fa fa-envelope" href="mailto:jsaratovsky@thenewamericanacademy.org"></a>
          </div>
        </div>
      </header>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-start">
          <GatsbyLink to="/" className="navbar-item">
            Home
          </GatsbyLink>
          <GatsbyLink className="navbar-item" to="/about">
            About
          </GatsbyLink>
          <GatsbyLink className="navbar-item" to="/parent-involvement">
            Parent Involvement
          </GatsbyLink>
          <GatsbyLink className="navbar-item" to="/photo-gallery">
            Photo Gallery
          </GatsbyLink>
          <GatsbyLink className="navbar-item" to="/testimonials">
            Testimonials
          </GatsbyLink>
          <GatsbyLink className="navbar-item" to="/contact-us">
            Contact Us
          </GatsbyLink>
        </div>
        <div className="navbar-end">
          60 E. 94th Street<br/>
          Brooklyn, NY 11212<br/>
          718-221-5837<br/>
          Principal: Jessica Saratovsky
        </div>
      </div>
    </nav>
    <div>{children()}</div>
    <footer className="container">
    <a
      className="navbar-item"
      href="https://github.com/patsplat/ps770"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <img src={github} alt="Github" />
      </span>
    </a>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
