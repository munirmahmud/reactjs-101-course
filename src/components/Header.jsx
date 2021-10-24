import React from "react";
import { socials } from "../data/socials.json";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 overflow">
            <SocialMedia socials={socials} />
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
