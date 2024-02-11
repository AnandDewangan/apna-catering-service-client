import React from 'react'

export default function About() {
  return (
    <div className="container-xxl py-5 hero" id="about">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6">
                <div className="row g-3">
                    <div className="col-6 text-start">
                        <img className="img-fluid" src={require('../images/about-1.jpg')} />
                    </div>
                    <div className="col-6 text-start">
                        <img className="img-fluid" src={require('../images/about-2.jpg')}/>
                    </div>
                    <div className="col-6 text-end">
                        <img className="img-fluid" src={require('../images/about-3.jpg')} />
                    </div>
                    <div className="col-6 text-end">
                        <img className="img-fluid" src={require('../images/about-4.jpg')} />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 text-light">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                <h1 className="mb-4 text-light">Welcome to <i className="fa fa-utensils text-primary me-2"></i> Ganesh Caterers</h1>
                <h4 className="mb-4 text-primary" id="typing-text"><b>Ganesh Caterer: Crafting Culinary Magic Since 2003</b></h4>
                <p className="mb-4">With a legacy spanning back to 2003, Ganesh Caterer has been a trusted name in the realm of culinary expertise. We take pride in orchestrating unforgettable weddings for over 1000 couples, setting the stage for joyous unions. Additionally, our expertise extends to over 500 customer parties and 250+ other celebrations, where we have consistently delivered excellence in catering services. At Ganesh Caterer, we blend experience with innovation to turn your special moments into extraordinary memories.</p>
                <div className="row g-4 mb-4 mt-5">
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">20</h1>
                            <div className="ps-4">
                                <p className="mb-0">Years of</p>
                                <h6 className="text-uppercase mb-0 text-warning">Experience</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">35</h1>
                            <div className="ps-4">
                                <p className="mb-0">Popular</p>
                                <h6 className="text-uppercase mb-0 text-warning">Master Chefs</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
