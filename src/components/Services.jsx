function Services() {
  return (
    <section className="services-section" id="services">

      <div className="container">

        <div className="section-title">
          <span>OUR SERVICES</span>
          <h2>Made For Every Need</h2>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="service-card">

              <h4>Ready to Eat Packets</h4>

              <p>
                Convenient ready-to-eat chapati packets.
              </p>

              <img
              src="https://media.istockphoto.com/id/516359240/photo/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati.jpg?s=612x612&w=0&k=20&c=0mGnvNM2lxl-dTTJlhAfVJE5WidxYmmvrvNs1NZUKvs="
                alt=""
              />

            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">

              <h4>Bulk Orders</h4>

              <p>
                Perfect for events and hostel services.
              </p>

              <img
                src="https://content.jdmagicbox.com/comp/def_content/chapati-suppliers/9odaahmksx-chapati-suppliers-2-aatyh.jpg"
                alt=""
              />

            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">

              <h4>Home Delivery</h4>

              <p>
                Fresh chapatis delivered to your doorstep.
              </p>

              <img
                src="https://images.pexels.com/photos/7129400/pexels-photo-7129400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;