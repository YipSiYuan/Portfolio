import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import Introduction from "./Sections/Introduction";
import ProjectHighlights from "./Sections/ProjectHighlights";
import Footer from "./Sections/Footer";
import Skills from "./Sections/Skills";
import Body from "./Sections/Body";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
     
      <Footer />
    </div>
  );
};

export default Home;
