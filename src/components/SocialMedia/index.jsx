import React from "react";
import SocialItem from "./SocialItem";

const SocialMedia = ({ socials }) => {
  return (
    <div className="social-icons pull-right">
      <ul className="nav nav-pills">
        {socials.map((item) => (
          <SocialItem key={item.id} social={item} />
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
