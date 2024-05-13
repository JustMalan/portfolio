import AboutMe from "./components/AboutMe";
import HeroBanner from "./components/HeroBanner";
import Projects from "./components/Projects";

var sectionStyle = {
  background: `linear-gradient(180deg, rgba(2,15,56,1) 0%,rgba(4,81,144,1) 75%)`,
};

function App() {
  return (
    <div>
      <HeroBanner />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
