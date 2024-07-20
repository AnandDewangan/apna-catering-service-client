import React, { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [sub, setSub] = useState('');
    const [address, setAddress] = useState('');
    
    const handleMsg = async(e) =>{
        e.preventDefault();
        let data = {name, contact, sub, address};
        let result = await fetch('https://apna-catering-service-server.vercel.app/info',{
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        result = result.json();

        if(!result){
            alert("Something went wrong, please try again later.");
        }else{
            alert("Thank you! We will contact you soon!");
            setName('');
            setContact('');
            setSub('');
            setAddress('');
        }
    }
  return (
    <div class="container-xxl py-5" id="contact">
    <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
            <h1 class="mb-5">Contact For Any Query</h1>
        </div>
        <div class="row g-4">
            <div class="col-12">
                <div class="row gy-4">
                    <div class="col-md-3">
                        <div class="contact-info d-flex gap-2 justify-content-center">
                            <div class="contact-icon">
                                <i class="fa fa-2x fa-map-marker-alt text-primary"></i>
                            </div>
                            <div class="contact-text">
                                <h5>Address</h5>
                                <p>Chingrajpara, Bahartarai Chowk, Bilaspur</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="contact-info d-flex gap-2 justify-content-center">
                            <div class="contact-icon">
                                <i class="fa fa-2x fa-phone-alt text-success"><a href="tel: +918963906336"></a></i>
                            </div>
                            <div class="contact-text">
                                <h5>Call Us</h5>
                                <p><a href="tel: +918963906336">8963906336</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="contact-info d-flex gap-2 justify-content-center">
                            <div class="contact-icon">
                                <i class="fa fa-2x fa-envelope text-danger"><a href="mailto: apnacateringservices@gmail.com" target="_blank"></a></i>
                            </div>
                            <div class="contact-text">
                                <h5>Email Us</h5>
                                <p><a href="mailto: apnacateringservices@gmail.com" target="_blank">apnacateringservices@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="contact-info d-flex gap-2 justify-content-center">
                            <div class="contact-icon">
                                <i class="fa fa-2x fa-share text-secondary"></i>
                            </div>
                            <div class="contact-text">
                                <h5>Follow Us</h5>
                                <div class="contact-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-youtube"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe class="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.9257009322396!2d82.1681160756425!3d22.09065427983785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b77153ee2bf%3A0xce5afe2a97af3202!2sAnand%20Tiffin%20Center%20%26%20Catering%20Services!5e0!3m2!1sen!2sin!4v1721477591256!5m2!1sen!2sin" frameborder="0" style={{minHeight:"350px", border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.9257009322396!2d82.1681160756425!3d22.09065427983785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b77153ee2bf%3A0xce5afe2a97af3202!2sAnand%20Tiffin%20Center%20%26%20Catering%20Services!5e0!3m2!1sen!2sin!4v1721477591256!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
            <div class="col-md-6">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} name="name" value={name} required />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="number" placeholder="Your Mobile Number" onChange={(e)=>setContact(e.target.value)} name="contact" value={contact} required />
                                    <label for="email">Your Mobile No</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" name="sub" onChange={(e)=>setSub(e.target.value)} value={sub} required />
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" id="message" onChange={(e)=>setAddress(e.target.value)} style={{height:"150px"}} value={address} name="address"></textarea>
                                    <label for="message">Address</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit" name="submit" onClick={handleMsg}>Send Message</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
