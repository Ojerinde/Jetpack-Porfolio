import Card from "../UI/Card/Card";
import Stacks from "./Stacks/Stacks";

const About = () => {
  return (
    <section id="about" className="section__about">
      <h1 className="section__about--header">About</h1>
      <h2 className="section__about--subheader">Who Am I?</h2>
      <div className="detail__box">
        <div className="left">
          <Card className="left__box left__box--1">
            I am a Full Stack Developer with a passion for continuous learning
            and adopting best practices.
          </Card>
          <Card className="left__box left__box--2">
            I am currently working on a web application that enables students to
            ask questions and receive real-time answers from tutors.
          </Card>
          <Card className="left__box left__box--3">
            I am seeking an opportunity to work with a team of experts in order
            to develop my skills further and expand my experience as a
            developer.
          </Card>
        </div>
        <figure className="right">
          <img src="./assets/img.jpg" alt="" />
        </figure>
      </div>
      <h2 className="section__about--subheader">Tecnologies Stacks</h2>
      <Stacks />
    </section>
  );
};
export default About;
