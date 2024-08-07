import React from 'react'

export default function Footer() {
  return ( 
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" id="contact">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <a className="btn btn-link" href="/about">About Us</a>
                        <a className="btn btn-link" href="tel: +918963906336">Contact Us</a>
                        {/* <a className="btn btn-link" href="/booking">Reservation</a> */}
                        <a className="btn btn-link" href="/">Privacy Policy</a>
                        <a className="btn btn-link" href="/">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Chingrajpara, Bahartarai Chowk, Bilaspur (C.G.)</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i><a href="tel:+9189639 06336">8963906336</a></p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i><a href="mailto:apnacateringservices@gmail.com">apnacateringservices@gmail.com</a></p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Sunday</h5>
                        <p>Lunch ---- 09AM - 12PM</p>
                        <p>Dinner ---- 06AM - 08PM</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>New Flavors, New Experiences: Unveiling Our Latest Menu</p>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                           <span> &copy; <a className="border-bottom" href="/">Apna Catering Services</a>, All Right Reserved.</span>

                            {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                            Designed By <a className="border-bottom" href="https://www.linkedin.com/in/anand-dewangan/">Anand Dewangan</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="/">Home</a>
                                <a href="tel:+918963906336">Contact</a>
                                <a href="tel:+918963906336">Help</a>
                                <a href="tel:+918963906336">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
