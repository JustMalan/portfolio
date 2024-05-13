import NavBar from "./NavBar";
import Hero from "../assets/hero.png";
import Button from "react-bootstrap/Button";

var sectionStyle = {
  backgroundImage: `url(${Hero})`,
  backgroundRepeat: `repeat`,
  backgroundPosition: `center`,
  width: `100%`,
  height: `auto`,
};

function HeroBanner() {
  return (
    <>
      <div style={sectionStyle}>
        <NavBar />
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
          <div className="row justify-content-center">
            <h1>The Future of development today</h1>
            <Button className="w-50">Contact me</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
