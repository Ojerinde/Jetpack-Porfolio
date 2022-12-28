const Stack = ({ stack, percentage }) => {
  let color = "";
  if (percentage > 70) {
    color = "#c6bb1c";
  } else if (percentage > 30) {
    color = "#e7db2e";
  } else color = "#dfd661";
  return (
    <li className="stack__item">
      <span className="stack">{stack}</span>
      <div className="div">
        <div
          style={{
            backgroundColor: `${color}`,
            width: `${percentage}%`,
            height: "2.5rem",
          }}
        >
          &nbsp;
        </div>
      </div>
      <span
        className="level"
        style={{
          color: `${color}`,
        }}
      >{`${percentage}%`}</span>
    </li>
  );
};
export default Stack;
