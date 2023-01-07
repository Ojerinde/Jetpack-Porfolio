import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleDoubleLeft } from "react-icons/fa";

const ProjectDetails = (props) => {
  const router = useRouter();
  const goBackHandler = () => {
    router.push("/");
  };
  return (
    <section className="project__details">
      <FaAngleDoubleLeft
        className="project__details--icon"
        onClick={goBackHandler}
      />
      <div className="project__details--section">
        <h2 className="project__details--label">Title</h2>
        <p className="project__details--title">{props?.title}</p>
      </div>
      <figure className="project__details--figure">
        <img src={props?.image} alt="" className="project__details--image" />
        {/* <Image fill alt={props?.title} src={props?.image} sizes="100vw" /> */}
      </figure>
      <div className="project__details--section">
        <h2 className="project__details--label">Description</h2>
        <p className="project__details--description">{props?.description}</p>
      </div>
      <div className="project__details--section">
        <h2 className="project__details--label">Stacks</h2>
        <ul className="project__details--list">
          {props.stacks?.map((stack, index) => (
            <li key={index} className="project__details--item">
              {stack}
            </li>
          ))}
        </ul>
      </div>
      <div className="project__details--section">
        <h2 className="project__details--label">Some Libraries used</h2>
        <ul className="project__details--lists">
          {props.libraries?.map((stack, index) => (
            <li key={index} className="project__details--item">
              {stack}
            </li>
          ))}
        </ul>
      </div>
      <div className="project__details--buttons">
        <Link
          href={`${props.sourcecode}`}
          target="_blank"
          className="project__details--sourcecode"
        >
          Source code
        </Link>
        <Link
          href={`${props.livelink}`}
          target="_blank"
          className="project__details--livelink"
        >
          Live Link
        </Link>
      </div>
    </section>
  );
};
export default ProjectDetails;
