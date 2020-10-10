import React from 'react';


function SiteSection(){
    return(
        <div>
            <section className="site-section" id="agents-section">
                <div className="container">
                <div className="row mb-5">
                    <div className="col-md-7 text-left">
                    <h2 className="section-title mb-3">Real Estate Agents</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4">
                    <div className="team-member">
                        <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook" /></a></li>
                            <li><a href="#"><span className="icon-twitter" /></a></li>
                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                            <li><a href="#"><span className="icon-instagram" /></a></li>
                        </ul>
                        <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                        </figure>
                        <div className="p-3 bg-primary">
                        <h3 className="mb-2">Allison Holmes</h3>
                        <span className="position">Real Estate Agent</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                    <div className="team-member">
                        <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook" /></a></li>
                            <li><a href="#"><span className="icon-twitter" /></a></li>
                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                            <li><a href="#"><span className="icon-instagram" /></a></li>
                        </ul>
                        <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                        </figure>
                        <div className="p-3 bg-primary">
                        <h3 className="mb-2">Dave Simpson</h3>
                        <span className="position">Real Estate Agent</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                    <div className="team-member">
                        <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook" /></a></li>
                            <li><a href="#"><span className="icon-twitter" /></a></li>
                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                            <li><a href="#"><span className="icon-instagram" /></a></li>
                        </ul>
                        <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                        </figure>
                        <div className="p-3 bg-primary">
                        <h3 className="mb-2">Ben Thompson</h3>
                        <span className="position">Real Estate Agent</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default SiteSection;
