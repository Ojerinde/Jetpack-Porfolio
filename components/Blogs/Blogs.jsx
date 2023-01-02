import Blog from "./Blog";

const Blogs = () => {
  const Dummy = [1, 2, 3, 4, 5, 6];
  return (
    <ul className="blogslist">
      {Dummy.map((el, index) => (
        <Blog key={index} item={el} />
      ))}
    </ul>
  );
};
export default Blogs;
