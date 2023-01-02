const Project = ({ projectImage, projectName, projectStacks }) => {
  const listStyles = {
    background: `url(${projectImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "30rem",
  };
  return (
    <li className="project">
      <div style={listStyles}></div>
      <div className="project__title">{projectName}</div>
      <div className="project__stack">
        {projectStacks.map((stack, index) => (
          <li key={index} className="project__stack--item">
            {stack}
          </li>
        ))}
      </div>
    </li>
  );
};
export default Project;
