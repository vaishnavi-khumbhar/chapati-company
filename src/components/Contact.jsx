import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">

      <div className="container">

        {/* TITLE */}

        <div className="text-center mb-5">

          <span className="contact-badge">
            CONTACT US
          </span>

          <h2 className="contact-title mt-4">
            Let's Connect For <span>Fresh Chapatis</span>
          </h2>

          <p className="contact-subtitle">
            Order homemade chapatis, bulk supply,
            or dealership inquiries today.
          </p>

        </div>

        <div className="row g-5 align-items-center">

          {/* LEFT SIDE */}

          <div className="col-lg-5">

            <div className="contact-info-card">

              <img
                src="https://img.magnific.com/free-photo/indian-tasty-roti-composition_23-2149073357.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                className="contact-image"
              />

              <div className="contact-info-content">

                <div className="contact-item">

                  <div className="contact-icon bg-warning">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h5>Call Us</h5>
                    <p>+91 9876543210</p>
                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-icon bg-danger">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h5>Email</h5>
                    <p>info@thechapaticompany.com</p>
                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-icon bg-success">
                    <FaWhatsapp />
                  </div>

                  <div>
                    <h5>WhatsApp</h5>
                    <p>Quick Order Support</p>
                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-icon bg-primary">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h5>Location</h5>
                    <p>Pune, Maharashtra</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}

          <div className="col-lg-7">

            <div className="contact-form-card">

              <h3 className="mb-4">
                Send Us A Message
              </h3>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-4">

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Your Name"
                    />

                  </div>

                  <div className="col-md-6 mb-4">

                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Your Email"
                    />

                  </div>

                </div>

                <div className="mb-4">

                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Subject"
                  />

                </div>

                <div className="mb-4">

                  <textarea
                    rows="6"
                    className="form-control custom-input"
                    placeholder="Write Your Message"
                  ></textarea>

                </div>

                <button className="btn send-btn">

                  <FaPaperPlane className="me-2" />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;