import { FaBars, FaShoppingCart } from "react-icons/fa";

function Navbar() {

  // CLOSE MOBILE NAVBAR
  const closeNavbar = () => {
    const nav = document.getElementById("navMenu");

    if (nav.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(nav, {
        toggle: false,
      });

      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">

      <div className="container">

        {/* LOGO */}

        <a className="navbar-brand logo-text" href="#home">
          <span className="logo-yellow">The Chapati</span>
          <span className="logo-white"> Company</span>
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
              <a className="nav-link active-link" href="#home" onClick={closeNavbar}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={closeNavbar}>
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={closeNavbar}>
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={closeNavbar}>
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#testimonials" onClick={closeNavbar}>
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>
                Contact
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;