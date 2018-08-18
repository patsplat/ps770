import Helmet from 'react-helmet'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

import './all.sass'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle tag="a" className="nav-link" caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
        <title>PS 770-The New American Academy</title>
    </Helmet>

    <header className="py-3 container">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-10">
            <a className="text-dark" href="#">PS 770-The New American Academy</a>
          </div>
          <div className="col-2  d-flex justify-content-end">
            <a className="btn btn-sm btn-outline-secondary ml-1 fa fa-twitter" href="http://twitter.com/ps770"></a>
            <a className="btn btn-sm btn-outline-secondary ml-1 fa fa-envelope" href="mailto:jsaratovsky@thenewamericanacademy.org"></a>
          </div>
        </div>
      </header>
    <nav className="container nav d-flex justify-content-between">
      <GatsbyLink className="p-2 text-muted" to="/">Home</GatsbyLink>
      <AboutUs />
      <div className="dropdown">
        <a className="p-2 text-muted" href="#" role="button" id="aboutMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </a>

        <div className="dropdown-menu" aria-labelledby="aboutMenu">
          <GatsbyLink className="dropdown-item" to="/content/about-us">
            About
          </GatsbyLink>
          <GatsbyLink className="dropdown-item" to="/content/our-staff">
            Our Staff
          </GatsbyLink>
          <GatsbyLink className="dropdown-item" to="/content/our-curriculum">
            Our Curriculum
          </GatsbyLink>
          <GatsbyLink className="dropdown-item" to="/content/social-emotional-learning">
            Social Emotional Learning
          </GatsbyLink>
          <GatsbyLink className="dropdown-item" to="/content/enrichment">
            Enrichment
          </GatsbyLink>
        </div>
      </div>

      <GatsbyLink className="p-2 text-muted" to="/content/parent-involvement">
        Parent Involvement
      </GatsbyLink>
      <GatsbyLink className="p-2 text-muted" to="/content/photo-gallery">
        Photo Gallery
      </GatsbyLink>
      <GatsbyLink className="p-2 text-muted" to="/content/testimonials">
        Testimonials
      </GatsbyLink>
      <GatsbyLink className="p-2 text-muted" to="/content/contact-us">
        Contact Us
      </GatsbyLink>
    </nav>
    <div>{children()}</div>
    <footer className="container mb-5">
      <div className="row">
        <div className="col-9">
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
        </div>

        <div className="col-3">
          60 E. 94th Street<br/>
          Brooklyn, NY 11212<br/>
          718-221-5837<br/>
          Principal: Jessica Saratovsky
        </div>
      </div>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
