import { FaLeaf, FaHeart, FaHome } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="row align-items-center min-vh-100">

          <div className="col-lg-5 text-white">

            <span className="hero-badge">
              HOMEMADE CHAPATIS IN PUNE
            </span>

            <h1 className="hero-title">
              AUTHENTIC, SOFT & <span>HOMEMADE CHAPATIS</span> IN PUNE
            </h1>

            <p className="hero-text">
              Taste the Comfort of Home,
              Delivered to Your Table.
            </p>

            <div className="hero-buttons">

              <button className="btn primary-btn">
                Order Now
              </button>

              <button className="btn secondary-btn">
                Explore More →
              </button>

            </div>

            <div className="hero-icons">

              <div>
                <FaLeaf />
                <p>Pure Ingredients</p>
              </div>

              <div>
                <FaHeart />
                <p>No Preservatives</p>
              </div>

              <div>
                <FaHome />
                <p>100% Homemade</p>
              </div>

            </div>

          </div>

          <div className="col-lg-7 text-center">

            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/729/873/small/makar-sankranti-sweet-til-gul-roti-a-chapati-made-with-sesame-seeds-and-jaggery-photo.jpeg"
              className="hero-image"
              alt=""
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;