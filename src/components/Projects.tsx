import { Carousel, Card, Button } from "react-bootstrap";
import EMR from "../assets/EMR.jpeg";
import Financial from "../assets/Financial.jpeg";
import MealPlanner from "../assets/MealPlanner.jpeg";

var sectionStyle = {
  background: `linear-gradient(180deg, rgba(4,81,144,1) 0%,rgba(2,15,56,1) 75%)`,
  margin: 0,
};

function Projects() {
  return (
    <>
      <div>
        <div
          className="container-fluid justify-content-center text-center align-items-center p-5"
          style={sectionStyle}
          id="AboutMe"
        >
          <div className="m-5" id="Projects">
            <h1>Projects</h1>
          </div>
          <Carousel indicators={false} interval={4000} fade={true}>
            <Carousel.Item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card style={{ width: "50%", height: "auto" }}>
                <Card.Img className="img" variant="top" src={MealPlanner} />
                <Card.Body>
                  <Card.Text>
                    <p>
                      A Meal Planner web/mobile application that suits your
                      specific dietry needs, taking in to account your available
                      groceries and macro needs
                    </p>
                    <Button> Learn more</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card style={{ width: "50%", height: "auto" }}>
                <Card.Img className="img" variant="top" src={EMR} />
                <Card.Body>
                  <Card.Text>
                    <p>
                      A mobile EMR system that uses AI to detect conditions and
                      help medical professionals make quicker decisions, saving
                      time for both patient and doctor
                    </p>
                    <Button> Learn more</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card style={{ width: "50%", height: "auto" }}>
                <Card.Img className="img" variant="top" src={Financial} />
                <Card.Body>
                  <Card.Text>
                    <p className="">
                      A financial planner that helps you manage and allocate
                      your finances, using AI to help you find places where you
                      can save money.
                    </p>
                    <Button> Learn more</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Projects;
