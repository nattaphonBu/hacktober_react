import React from 'react';


function Footer(){
    return(
        <div>
            <footer className="site-footer">
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-5">
                        <h2 className="footer-heading mb-4">About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                        </div>
                        <div className="col-md-3 mx-auto">
                        <h2 className="footer-heading mb-4">Quick Links</h2>
                        <ul className="list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="mb-4">
                        <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
                        <form action="#" method="post" className="footer-subscribe">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                            <button className="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                            </div>
                        </div>
                        </form>  
                    </div>
                    <div className>
                        <h2 className="footer-heading mb-4">Follow Us</h2>
                        <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                        <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
                    </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                    <div className="border-top pt-5">
                        <p className="copyright">
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
