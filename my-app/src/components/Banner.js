import React from 'react';

function Banner() {
    
    return (
      <div>
        <div className="site-block-wrap">
          <div className="owl-carousel with-dots">
            <div
              className="site-blocks-cover overlay overlay-2"
              style={{ backgroundImage: "url(images/hero_1.jpg)" }}
              data-aos="fade"
              id="home-section"
            >
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 mt-lg-5 text-center">
                    <h1 className="text-shadow">
                      Buy &amp; Sell Property Here
                    </h1>
                    <p className="mb-5 text-shadow">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Provident vitae, aut inventore repellendus. Iusto,
                      assumenda!{" "}
                    </p>
                    <p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-primary px-5 py-3"
                      >
                        Get Started
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="site-blocks-cover overlay overlay-2"
              style={{ backgroundImage: "url(images/hero_2.jpg)" }}
              data-aos="fade"
              id="home-section"
            >
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 mt-lg-5 text-center">
                    <h1 className="text-shadow">
                      Find Your Perfect Property For Your Home
                    </h1>
                    <p className="mb-5 text-shadow">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eaque quam doloribus reprehenderit dolore adipisci rerum?
                    </p>
                    <p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-primary px-5 py-3"
                      >
                        Get Started
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;
