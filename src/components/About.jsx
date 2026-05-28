import {
  FaSeedling,
  FaFire,
  FaLeaf,
  FaHome
} from "react-icons/fa";

function About() {

  const features = [
    {
      icon: <FaSeedling />,
      title: "Fresh Wheat",
      text: "Freshly ground wheat for softness and nutrition.",
      color: "#ff9800"
    },

    {
      icon: <FaFire />,
      title: "Pure Ghee",
      text: "Rich aroma and delicious homemade taste.",
      color: "#ff5722"
    },

    {
      icon: <FaLeaf />,
      title: "No Preservatives",
      text: "Healthy chapatis made using clean ingredients.",
      color: "#43a047"
    },

    {
      icon: <FaHome />,
      title: "Homemade Quality",
      text: "Just like rotis made in your own kitchen.",
      color: "#8e24aa"
    }
  ];

  return (

    <section id="about" className="about-section py-5">

      <div className="container">

        {/* TITLE */}

        <div className="text-center mb-5">

          <span className="about-badge">
            WHY CHOOSE US
          </span>

          <h2 className="about-title mt-4">
            Freshness You Can
            <span> Trust</span>
          </h2>

          <p className="about-subtitle">
            Experience authentic homemade chapatis prepared
            with love, hygiene, and premium quality ingredients.
          </p>

        </div>

        {/* CARDS */}

        <div className="row g-4">

          {features.map((item, index) => (

            <div className="col-md-6 col-lg-3" key={index}>

              <div className="about-card">

                {/* ICON */}

                <div
                  className="about-icon"
                  style={{
                    background: item.color
                  }}
                >
                  {item.icon}
                </div>

                {/* CONTENT */}

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.text}
                </p>

                {/* GLOW */}

                <div
                  className="card-glow"
                  style={{
                    background: item.color
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default About;