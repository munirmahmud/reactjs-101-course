import React from "react";
import { clients } from "../../data/clients.json";
import ClientItem from "./ClientItem";

const Clients = () => {
  return (
    <section id="clients">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div
              className="clients text-center wow fadeInUp"
              data-wow-duration="500ms"
              data-wow-delay="300ms"
            >
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/home/clients.png`}
                  className="img-responsive"
                  alt=""
                />
              </p>
              <h1 className="title">Happy Clients</h1>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. <br /> Ut enim ad minim veniam, quis nostrud{" "}
              </p>
            </div>

            <div className="clients-logo">
              {Array.isArray(clients) && clients.length > 0 ? (
                clients.map((client, index) => (
                  <ClientItem key={index} client={client} />
                ))
              ) : (
                <p>No clients info found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
