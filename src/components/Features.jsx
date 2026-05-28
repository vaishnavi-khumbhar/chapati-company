import {
  FaSeedling,
  FaCheese,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Features() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="features-section py-5" id="features">

      <div className="container">

        {/* TITLE */}

        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >

          <span className="feature-badge">
            WHY CHOOSE US
          </span>

          <h2 className="feature-title mt-4">
            Fresh • Healthy • <span>Homemade</span>
          </h2>

          <p className="feature-subtitle">
            Experience soft and delicious chapatis made with
            premium ingredients and lots of love.
          </p>

        </div>

        {/* FEATURE CARDS */}

        <div className="row g-4">

          {/* CARD 1 */}

          <div
            className="col-md-6 col-lg-3"
            data-aos="zoom-in"
          >

            <div className="feature-card">

              <div className="feature-img-box">

                <img
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b"
                  alt=""
                  className="feature-img"
                />

                <div className="feature-icon bg-success">
                  <FaSeedling />
                </div>

              </div>

              <div className="feature-content">

                <h4>Fresh Wheat</h4>

                <p>
                  Freshly ground wheat for better softness,
                  nutrition, and authentic homemade taste.
                </p>

              </div>

            </div>

          </div>

          {/* CARD 2 */}

          <div
            className="col-md-6 col-lg-3"
            data-aos="flip-left"
          >

            <div className="feature-card">

              <div className="feature-img-box">

                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="feature-img"
                />

                <div className="feature-icon bg-warning">
                  <FaCheese />
                </div>

              </div>

              <div className="feature-content">

                <h4>Pure Ghee</h4>

                <p>
                  Rich aroma and authentic flavor with
                  premium quality pure ghee.
                </p>

              </div>

            </div>

          </div>

          {/* CARD 3 */}

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
          >

            <div className="feature-card">

              <div className="feature-img-box">

                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="feature-img"
                />

                <div className="feature-icon bg-danger">
                  <FaShieldAlt />
                </div>

              </div>

              <div className="feature-content">

                <h4>No Preservatives</h4>

                <p>
                  Healthy chapatis made without chemicals
                  or harmful additives.
                </p>

              </div>

            </div>

          </div>

          {/* CARD 4 */}

          <div
            className="col-md-6 col-lg-3"
            data-aos="flip-right"
          >

            <div className="feature-card">

              <div className="feature-img-box">

                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
                  alt=""
                  className="feature-img"
                />

                <div className="feature-icon bg-primary">
                  <FaHome />
                </div>

              </div>

              <div className="feature-content">

                <h4>Homemade Taste</h4>

                <p>
                  Soft chapatis crafted with love,
                  just like your home kitchen.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;