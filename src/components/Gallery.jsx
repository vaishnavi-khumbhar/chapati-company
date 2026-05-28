function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="container">

        <div className="section-title">
          <span>OUR CHAPATI GALLERY</span>
          <h2>Freshly Made Every Day</h2>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3Ck4HOA9wnRfT3OkLxsm2fo-iRD_x7xB0Q&s"
              className="gallery-img"
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://m.media-amazon.com/images/I/51xiIHcFSdL._AC_UF1000,1000_QL80_.jpg"
              className="gallery-img"
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://media.istockphoto.com/id/508374340/photo/homemade-chapati.jpg?s=612x612&w=0&k=20&c=lozsrleZ88efHFdMYCtUkyUW5mTqXVDoFp_jtI2s53Q="
              className="gallery-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Gallery;