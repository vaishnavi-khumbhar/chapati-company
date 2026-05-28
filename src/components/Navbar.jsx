import { FaBars, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">

      <div className="container">

        {/* LOGO */}

        <a className="navbar-brand logo-text" href="#home">

          <span className="logo-yellow">
            The Chapati
          </span>

          <span className="logo-white">
            {" "}Company
          </span>

        </a>

        {/* TOGGLER */}

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <FaBars color="white" size={22} />
        </button>

        {/* MENU */}

        <div className="collapse navbar-collapse" id="navMenu">

          <ul className="navbar-nav mx-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link active-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>

            {/* FIXED TESTIMONIALS */}

            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>

          {/* BUTTON */}

         <button className="btn order-btn">

  <FaShoppingCart />

  <span>Order Now</span>

</button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;