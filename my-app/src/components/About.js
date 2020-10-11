import React from 'react';


function About(){
    return(
        <div>
            <section className="site-section" id="about-section">
                <div className="container">
                <div className="row large-gutters">
                    <div className="col-lg-6 mb-5">
                    <div className="owl-carousel slide-one-item with-dots">
                        <div><img src="images/img_1.jpg" alt="Image" className="img-fluid" /></div>
                        <div><img src="images/img_2.jpg" alt="Image" className="img-fluid" /></div>
                        <div><img src="images/img_3.jpg" alt="Image" className="img-fluid" /></div>
                    </div>
                    </div>
                    <div className="col-lg-6 ml-auto">
                    <h2 className="section-title mb-3">Warehouse Real Estate Template</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit  Quo suscipit omnis iste velit maxime.</p>
                    <ul className="list-unstyled ul-check success">
                        <li>Placeat maxime animi minus</li>
                        <li>Dolore qui placeat maxime</li>
                        <li>Consectetur adipisicing</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Placeat molestias animi</li>
                    </ul>
                    <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default About;
