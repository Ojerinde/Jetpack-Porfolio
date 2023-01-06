import Link from "next/link";
import { FaAngleDoubleLeft } from "react-icons/fa";

const ProjectDetails = (props) => {
  return (
    <section className="project__details">
      <FaAngleDoubleLeft />
      <div>
        <h2>Title</h2>
        <p>{props.title}</p>
      </div>
      <figure>
        <img src={props.image} alt="" />
      </figure>
      <div>
        <h2>Description</h2>
        <p>{props.description}</p>
      </div>
      <div>
        <h2>Stacks</h2>
        <p>{props.stacks}</p>
      </div>
      <div>
        <h2>Libraries used</h2>
        <p>{props.libraries}</p>
      </div>
      <div>
        <Link href={`${props.sourcecode}`}>Source code</Link>
        <Link href={`${props.livelink}`}>Live Link</Link>
      </div>
    </section>
  );
};
export default ProjectDetails;
