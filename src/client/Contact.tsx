import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      {/* Shop Banner */}
      <section className="shop-banner">
        <div>
          <h1>Contact</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="get-in-touch">
                <h2>Get in Touch With Us</h2>
                <p>
                  For more information about our product &amp; services please
                  feel free to drop us a line. Our Staff always be there to help
                  you! Do not hesitate.
                </p>
              </div>
              <div className="contact-info">
                <p>
                  <i className="fas fa-map-marker-alt" /> Address: 236 5th
                  Avenue, New york, United States
                </p>
                <p>
                  <i className="fas fa-phone" /> Phone: (+84) - 678 - 6789
                </p>
                <p>
                  <i className="fas fa-clock" /> Working Time: Monday - Friday
                  9:00 - 20:00
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="your-name">Your Name</label>
                    <input type="text" id="your-name" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email-address">Email Address</label>
                    <input
                      type="email"
                      id="email-address"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <i className="fas fa-gem" />
              <h5>High Quality</h5>
              <p>crafted from top materials</p>
            </div>
            <div className="col-md-3">
              <i className="fas fa-shield-alt" />
              <h5>Warranty Protection</h5>
              <p>Over 2 years</p>
            </div>
            <div className="col-md-3">
              <i className="fas fa-shipping-fast" />
              <h5>Free Shipping</h5>
              <p>Order over 150 $</p>
            </div>
            <div className="col-md-3">
              <i className="fas fa-headset" />
              <h5>24 / 7 Support</h5>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
