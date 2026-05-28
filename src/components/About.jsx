function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p className="text-muted">
            Homemade taste with premium quality ingredients
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow">
              <div className="card-body text-center">
                <h4>Fresh Wheat</h4>
                <p>
                  Freshly ground wheat for softness and nutrition.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow">
              <div className="card-body text-center">
                <h4>Pure Ghee</h4>
                <p>
                  Rich aroma and delicious homemade taste.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow">
              <div className="card-body text-center">
                <h4>No Preservatives</h4>
                <p>
                  Healthy chapatis made using clean ingredients.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow">
              <div className="card-body text-center">
                <h4>Homemade Quality</h4>
                <p>
                  Just like rotis made in your own kitchen.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About