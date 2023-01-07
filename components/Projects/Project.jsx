import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../UI/Button/Button";

const Project = ({ projectImage, projectName, projectStacks }) => {
  const router = useRouter();
  const projectId = projectName.split(" ")[0].toLowerCase();
  const learnMoreHandler = () => {
    router.push(`${projectId}`);
  };
  return (
    <li className="project">
      <div className="project__front--card">
        <Image fill alt={projectName} src={projectImage} sizes="100vw" />
      </div>
      <div className="project__back--card">
        <div className="project__title">{projectName}</div>
        <div className="project__stack">
          {projectStacks.map((stack, index) => (
            <li key={index} className="project__stack--item">
              {stack}
            </li>
          ))}
        </div>
        <Button className="project__button" onClick={learnMoreHandler}>
          Learn more
        </Button>
      </div>
    </li>
  );
};
export default Project;
