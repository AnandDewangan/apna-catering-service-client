import React from 'react'

export default function Menu() {
  return (
    <div className="container-xxl py-5" id="menu">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                        <i className="fa fa-coffee fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Popular</small>
                            <h6 className="mt-n1 mb-0">Breakfast</h6>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                        <i className="fa fa-hamburger fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Special</small>
                            <h6 className="mt-n1 mb-0">Launch</h6>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                        <i className="fa fa-utensils fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Lovely</small>
                            <h6 className="mt-n1 mb-0">Dinner</h6>
                        </div>
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/breakfast/aaloo-gunda.jpg")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Aloo Pakoda</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Savor the golden crunch of our Aloo Pakoda, where every bite is a burst of flavorful delight, capturing the essence of indulgence in simplicity.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/breakfast/chila.jpg")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chilla</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Delight in the fusion of flavors with our Chawal Atta Chila, a savory pancake that brings a perfect blend of taste and nutrition to your plate.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/breakfast/idli.jpg")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Idli & Sambhar</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Savor the South Indian harmony on your plate with our soft Idli and flavorful Sambhar, a symphony of taste that transcends culinary boundaries.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/breakfast/pakoda.jpg")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Pakoda</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Dive into the crispy indulgence of our Pakoda, a flavorful sensation that captures the essence of spice and warmth, creating a perfect snack-time symphony.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/breakfast/samosa.jpg")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Samosa</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Triangular delights await - our Samosas boast a golden, flaky crust embracing a spiced medley, creating an irresistible fusion of crispiness and flavor.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/breakfast/sev-poha.jpg")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Poha Sev</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Start your day with the warmth of our Poha, a fragrant blend of flattened rice, aromatic spices, and vibrant garnishes, ensuring a flavorful breakfast experience.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/rice.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Rice</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In the humblest bowl of rice lies the strength of a thousand harvests, a testament to patience and perseverance.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/dal.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Dal Fry</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In every spoonful of dal fry, find the harmony of tradition and taste, a melody of flavors that nourish the soul.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/dry sabji.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Dry Veg Sabji</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In each bite of Dry Veg Sabji, discover the harmony of fresh produce and aromatic spices, a feast for the senses.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/Aloo-Matar.webp")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Gravy Veg Sabji</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In every spoonful of Gravy Veg Sabji, taste the perfect blend of spices and garden-fresh goodness, a true culinary treasure.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/roti.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Roti</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Roti, a humble circle of warmth and tradition, wraps the essence of home in every bite.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/aachar.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Aachar</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Aachar, a tangy burst of tradition, preserves the vibrant essence of every meal.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/salad.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Salad</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Freshness in every bite, a symphony of flavors in a bowl.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/papad.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Papad</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Crisp and crunchy delights, adding spice to every bite.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                    <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/rice.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Rice</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In the humblest bowl of rice lies the strength of a thousand harvests, a testament to patience and perseverance.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/dal.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Dal Fry</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In every spoonful of dal fry, find the harmony of tradition and taste, a melody of flavors that nourish the soul.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/chole.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Dry Veg Sabji</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In each bite of Dry Veg Sabji, discover the harmony of fresh produce and aromatic spices, a feast for the senses.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/paneer-sabji.webp")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Gravy Veg Sabji</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">In every spoonful of Gravy Veg Sabji, taste the perfect blend of spices and garden-fresh goodness, a true culinary treasure.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/roti.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Roti</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Roti, a humble circle of warmth and tradition, wraps the essence of home in every bite.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/aachar.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Aachar</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Aachar, a tangy burst of tradition, preserves the vibrant essence of every meal.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/salad.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Salad</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Freshness in every bite, a symphony of flavors in a bowl.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={require("../images/lunch/papad.png")} alt="" style={{width: "80px"}} />
                                <div className="w-100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Papad</span>
                                        {/* <span className="text-primary">$115</span> */}
                                    </h5>
                                    <small className="fst-italic">Crisp and crunchy delights, adding spice to every bite.</small>
                                </div>
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
