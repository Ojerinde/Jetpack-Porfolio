import { useRouter } from "next/router";
import ProjectDetails from "../components/Projects/ProjectDetails";
import projectsBanks from "../components/Projects/projectsBanks";

const ProjectDetailsPage = () => {
  const {
    query: { projectId },
  } = useRouter();

  const project = projectsBanks.find(
    (pro) => pro.title.split(" ")[0].toLowerCase() === projectId
  );

  return (
    <ProjectDetails
      title={project?.title}
      image={project?.image}
      description={project?.description}
      stacks={project?.stacks}
      libraries={project?.libraries}
      sourcecode={project?.githubLink}
      livelink={project?.liveLink}
    />
  );
};
export default ProjectDetailsPage;
