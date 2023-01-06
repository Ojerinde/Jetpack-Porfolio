import About from "../components/About/About";
import BlogsSection from "../components/Blogs/BlogsSection";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectsSection from "../components/Projects/ProjectsSection";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <ProjectsSection />
      <BlogsSection />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
