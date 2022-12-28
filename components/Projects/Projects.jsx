import Project from "./Project";

const Projects = () => {
  const Dummy = [1, 2, 3, 4, 5, 6];
  return (
    <ul className="projects">
      {Dummy.map((el, index) => (
        <Project key={index} item={el} />
      ))}
    </ul>
  );
};
export default Projects;
