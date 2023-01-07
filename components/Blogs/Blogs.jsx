import Blog from "./Blog";

const Blogs = () => {
  const Dummy = [1, 2, 3, 4, 5, 6];
  const handleHover = (e) => {
    if (e.target === e.currentTarget) return;
    // console.log(this);
    const hoveredList = e.target;
    const siblings = hoveredList.closest("ul").querySelectorAll("li");
    siblings.forEach((list) => {
      if (list !== hoveredList) list.style.opacity = this;
      else list.style.opacity = this;
    });
  };
  return (
    <ul
      className="blogslist"
      onMouseOver={handleHover.bind(0.5)}
      onMouseLeave={handleHover.bind(1)}
    >
      {Dummy.map((el, index) => (
        <Blog key={index} item={el} />
      ))}
    </ul>
  );
};
export default Blogs;
