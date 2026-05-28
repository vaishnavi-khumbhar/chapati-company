import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

function Testimonials() {
  return (

    <section
      className="testimonials-section py-5"
      id="testimonials"
    >

      <div className="container">

        {/* TITLE */}

        <div className="text-center mb-5">

          <span className="testimonial-badge">
            CUSTOMER REVIEWS
          </span>

          <h2 className="testimonial-title mt-4">
            What Our <span>Customers Say</span>
          </h2>

          <p className="testimonial-subtitle">
            Thousands of happy customers trust
            The Chapati Company for fresh homemade taste.
          </p>

        </div>

        {/* TESTIMONIALS */}

        <div className="row g-4">

          {/* CARD 1 */}

          <div className="col-md-4">

            <div className="testimonial-card">

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="testimonial-top">

                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                  className="testimonial-img"
                />

                <div>

                  <h5>Priya Sharma</h5>

                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                </div>

              </div>

              <p className="testimonial-text">
                “Best homemade chapatis in Pune.
                Soft, fresh, and delicious every day.
                Tastes exactly like home food.”
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="col-md-4">

            <div className="testimonial-card middle-card">

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="testimonial-top">

                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                  className="testimonial-img"
                />

                <div>

                  <h5>Rahul Patil</h5>

                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                </div>

              </div>

              <p className="testimonial-text">
                “Perfect for office lunch and hostel
                food service. Always soft and hygienic.”
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="col-md-4">

            <div className="testimonial-card">

              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="testimonial-top">

                <img
                  src="https://img.magnific.com/free-photo/cheerful-young-woman-taking-notes-while-sitting-steps-street_1153-8613.jpg"
                  alt=""
                  className="testimonial-img"
                />

                <div>

                  <h5>Neha Kulkarni</h5>

                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                </div>

              </div>

              <p className="testimonial-text">
                “Pure ghee taste feels exactly like
                homemade chapatis from my kitchen.”
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;