import Stack from "./Stack";

const Stacks = () => {
  const stacks = [
    { stack: "HTML", percentage: "90" },
    { stack: "CSS", percentage: "90" },
    { stack: "Javascript", percentage: "80" },
    { stack: "ReactJs", percentage: "80" },
    { stack: "NextJs", percentage: "80" },
    { stack: "VueJs", percentage: "30" },
    { stack: "Python", percentage: "70" },
  ];
  return (
    <ul className="stacks__list">
      {stacks.map((el, index) => (
        <Stack key={index} stack={el.stack} percentage={el.percentage} />
      ))}
    </ul>
  );
};
export default Stacks;
