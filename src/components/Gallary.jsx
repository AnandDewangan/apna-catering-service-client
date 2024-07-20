import React from 'react'

export default function Gallary() {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" id="gallary">
    <div className="container">
        <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Gallary</h5>
            <h1 className="mb-5">Our Delicious Meal</h1>
        </div>
        <div className="owl-carousel testimonial-carousel row">
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/vetar.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/setup2.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/setup1.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/papad.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/sweetcorn fried.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/poha.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/jalebi.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/rice.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/veg fulao.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/kofta.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/mix veg.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/matar paneer.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/rasgulla.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/salad.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/feature-1.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/feature-3.jpg")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/thali1.png")} width="100%" />
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4 col-lg-3 col-md-6">
                <img src={require("../images/gallary/thali2.png")} width="100%" />
            </div>
        </div>
    </div>
</div>
  )
}
