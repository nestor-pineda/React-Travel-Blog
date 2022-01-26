import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slider-img" style={{ backgroundImage: `url("https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/baleares/ibiza-cala-s1534753385.jpg_604889389.jpg")` }}></div>
        <Carousel.Caption>
          <h3>Relax in Ibiza</h3>
          <p>Get to know the best beaches and restaurants</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-img" style={{ backgroundImage: `url("https://media.iatiseguros.com/wp-content/uploads/2019/07/04011649/que-ver-india-2.jpg")` }}></div>
        <Carousel.Caption>
          <h3>India, sounds, colours... </h3>
          <p>The most amazing country in the world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-img" style={{ backgroundImage: `url("https://entremontanas.com/wp-content/uploads/Vietnam-1.jpg")` }}></div>
        <Carousel.Caption>
          <h3>Vietnam never disappoints</h3>
          <p>Its people, its landscapes, its food...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
