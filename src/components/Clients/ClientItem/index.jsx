import React from "react";

const ClientItem = ({ client }) => {
  return (
    <div className="col-xs-3 col-sm-2">
      <a href={client.client_url}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/home/${client.logo}`}
          className="img-responsive"
          alt={client.name}
        />
      </a>
    </div>
  );
};

export default ClientItem;
