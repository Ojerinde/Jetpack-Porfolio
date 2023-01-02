import Project from "./Project";

const Projects = () => {
  const Dummy = [
    { title: "Project 1", stacks: ["HTML", "Css"], image: "./assets/img.jpg" },
    {
      title: "Project 2",
      stacks: ["JavaScript", "Python", "Sql"],
      image: "./assets/img.jpg",
    },
    { title: "Project 3", stacks: ["Python"], image: "./assets/img.jpg" },
    { title: "Project 4", stacks: ["Scss"], image: "./assets/img.jpg" },
  ];
  return (
    <ul className="projects">
      {Dummy.map((el, index) => (
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
