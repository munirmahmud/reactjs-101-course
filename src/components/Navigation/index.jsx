import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";

const Navigation = () => {
  return (
    <div className="navbar navbar-inverse" role="banner">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link className="navbar-brand" to="/">
            <h1>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                alt="logo"
              />
              {/* <img
                  src={require("../assets/images/logo.png").default}
                  alt="logo"
                /> */}
              {/* <img src="images/logo.png" alt="logo" /> */}
            </h1>
          </Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li className="dropdown">
              <a href="#">
                Pages <i className="fa fa-angle-down"></i>
              </a>
              <ul role="menu" className="sub-menu">
                <li>
                  <a href="aboutus.html">About</a>
                </li>
                <li>
                  <a href="aboutus2.html">About 2</a>
                </li>
                <li>
                  <a href="service.html">Services</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
                <li>
                  <a href="contact2.html">Contact us 2</a>
                </li>
                <li>
                  <a href="404.html">404 error</a>
                </li>
                <li>
                  <a href="coming-soon.html">Coming Soon</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="blog.html">
                Blog <i className="fa fa-angle-down"></i>
              </a>
              <ul role="menu" className="sub-menu">
                <li>
                  <a href="blog.html">Blog Default</a>
                </li>
                <li>
                  <a href="blogtwo.html">Timeline Blog</a>
                </li>
                <li>
                  <a href="blogone.html">2 Columns + Right Sidebar</a>
                </li>
                <li>
                  <a href="blogthree.html">1 Column + Left Sidebar</a>
                </li>
                <li>
                  <a href="blogfour.html">Blog Masonary</a>
                </li>
                <li>
                  <a href="blogdetails.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="portfolio.html">
                Portfolio <i className="fa fa-angle-down"></i>
              </a>
              <ul role="menu" className="sub-menu">
                <li>
                  <a href="portfolio.html">Portfolio Default</a>
                </li>
                <li>
                  <a href="portfoliofour.html">
                    Isotope 3 Columns + Right Sidebar
                  </a>
                </li>
                <li>
                  <a href="portfolioone.html">3 Columns + Right Sidebar</a>
                </li>
                <li>
                  <a href="portfoliotwo.html">3 Columns + Left Sidebar</a>
                </li>
                <li>
                  <a href="portfoliothree.html">2 Columns</a>
                </li>
                <li>
                  <a href="portfolio-details.html">Portfolio Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="shortcodes.html ">Shortcodes</a>
            </li>
          </ul>
        </div>

        {/* Search */}
        <Search />
      </div>
    </div>
  );
};

export default Navigation;
