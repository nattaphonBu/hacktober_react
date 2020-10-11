import React from 'react';

function NewsAndEvent() {
    return (
      <div>
        <section className="site-section" id="news-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center">
                <h2 className="section-title mb-3">News &amp; Events</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="h-entry">
                  <a href="single.html">
                    <img
                      src="images/img_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <h2 className="font-size-regular">
                    <a href="single.html" className="text-dark">
                      Popular Real Estate Properties for 2019
                    </a>
                  </h2>
                  <div className="meta mb-4">
                    Allison Holmes <span className="mx-2">•</span> Jan 18, 2019
                    <span className="mx-2">•</span>{" "}
                    <a href="single.html">News</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="h-entry">
                  <a href="single.html">
                    <img
                      src="images/img_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <h2 className="font-size-regular">
                    <a href="single.html" className="text-dark">
                      Popular Real Estate Properties for 2019
                    </a>
                  </h2>
                  <div className="meta mb-4">
                    James Phelps <span className="mx-2">•</span> Jan 18, 2019
                    <span className="mx-2">•</span>{" "}
                    <a href="single.html">News</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="h-entry">
                  <a href="single.html">
                    <img
                      src="images/img_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <h2 className="font-size-regular">
                    <a href="single.html" className="text-dark">
                      Popular Real Estate Properties for 2019
                    </a>
                  </h2>
                  <div className="meta mb-4">
                    Allison Holmes <span className="mx-2">•</span> Jan 18, 2019
                    <span className="mx-2">•</span>{" "}
                    <a href="single.html">News</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default NewsAndEvent;
