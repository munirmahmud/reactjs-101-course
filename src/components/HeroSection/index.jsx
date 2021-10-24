import React, { useEffect, useRef } from "react";

const HeroSection = ({ title, subtitle, images }) => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      preloaderRef.current.remove();
    });
  }, []);

  return (
    <section id="home-slider">
      <div className="container">
        <div className="row">
          <div className="main-slider">
            <div className="slide-text">
              {title && <h1>{title}</h1>}
              {subtitle && <p>{subtitle}</p>}

              <a href="#" className="btn btn-common">
                SIGN UP
              </a>
            </div>

            {images.length > 1 ? (
              images.map((item) => (
                <img
                  key={item.id}
                  src={`${process.env.PUBLIC_URL}/assets/images/slider/${item.image}`}
                  className={item.class}
                  alt={item.name}
                />
              ))
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/slider/${images.image}`}
                className={images.class}
                alt={images.name}
              />
            )}
          </div>
        </div>
      </div>

      <div ref={preloaderRef} className="preloader">
        <i className="fa fa-sun-o fa-spin"></i>
      </div>
    </section>
  );
};

export default HeroSection;
