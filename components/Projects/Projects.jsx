import Project from "./Project";
import projectsBanks from "./projectsBanks";

const Projects = () => {
  return (
    <ul className="projects">
      {projectsBanks.map((el, index) => (
        <Project
          key={index}
          projectName={el.title}
          projectImage={el.image}
          projectStacks={el.stacks}
        />
      ))}
    </ul>
  );
};
export default Projects;
