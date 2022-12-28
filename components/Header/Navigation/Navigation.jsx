const Navigation = () => {
  const clickedHandler = (e) => {
    if (e.target === e.currentTarget) return;
    const clicked = e.target;
    const sectionToScrollTo = clicked.getAttribute("className");
  };
  return (
    <nav className="navigation">
      <figure>
        <img src="./assets/logo.png" alt="" />
      </figure>
      <ul onClick={clickedHandler}>
        <li className="home">Home</li>
        <li className="about">About</li>
        <li className="portfolio">Portfolio</li>
        <li className="blog">Blog</li>
        <li className="contact">Contact</li>
      </ul>
    </nav>
  );
};
export default Navigation;
