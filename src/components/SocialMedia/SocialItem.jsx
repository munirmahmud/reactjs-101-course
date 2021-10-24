import React from "react";

const SocialItem = ({ social }) => {
  return (
    <li>
      <a href={social.link} title={social.title} target="_blank">
        <i className={`fa fa-${social.iconName}`}></i>
      </a>
    </li>
  );
};

export default SocialItem;
