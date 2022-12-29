import "./App.css";
import About from "./Components/About/About";
import Achievements from "./Components/Achievements/Achievements";
import Final from "./Components/Final/Final";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="main">
          <Hero />
          <About />
          <Work />
          <Project />
          <Achievements />
          <Final />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
