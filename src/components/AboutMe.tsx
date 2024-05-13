import MePicture from "../assets/MePicture.jpeg";

var sectionStyle = {
  background: `linear-gradient(180deg, rgba(2,15,56,1) 0%,rgba(4,81,144,1) 75%)`,
  margin: 0,
};

function AboutMe() {
  return (
    <>
      <div>
        <div
          className="container-fluid justify-content-center align-items-center p-5"
          style={sectionStyle}
          id="AboutMe"
        >
          <div className="row col-md">
            <div className="col-xl row-sm align-self-center text-center ">
              <h1 className="p-3">About Me</h1>
              <p>
                My name is Malan Grobler. <br />I am 27 years old and originally
                from South Africa.
                <br />I have been working in the development industry for the
                last 2 years, working on mobile and web applications for various
                startups, as well as working on some of my own projects.
                <br /> I am confident in my skills to solve complex problems as
                well and finding creative and quick solutions. I have experience
                with Full-stack web development, Java and Python, as well as
                some experience with Kotlin.
                <br /> I am familiar with the React framework as well as the
                Android Mobile Development Toolkit. I am excited to be a part of
                a team from whom I can not only learn but contribute in
                meaningful ways as well.
              </p>
            </div>
            <div className="col-xl row-sm text-center">
              <img className="img-fluid w-85 rounded" src={MePicture} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
