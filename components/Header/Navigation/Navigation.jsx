import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Navigation = React.forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const clickedHandler = (e) => {
    if (e.target === e.currentTarget) return;
    setOpen((prev) => !prev);
    const clicked = e.target;
    const sectionToScrollTo = clicked.getAttribute("href");
    console.log(sectionToScrollTo);
    document
      ?.querySelector(`#${sectionToScrollTo}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navigation desktop" ref={ref}>
        <figure>
          <img src="./assets/logo.png" alt="" />
        </figure>
        <ul onClick={clickedHandler}>
          <li href="home">Home</li>
          <li href="about">About</li>
          <li href="portfolio">Portfolio</li>
          <li href="blog">Blog</li>
          <li href="contact">Contact</li>
        </ul>
      </nav>

      <nav className="mobile__navigation mobile">
        <div className="mobile__header">
          <figure className="mobile__logo">
            <img src="./assets/logo.png" alt="" />
          </figure>
          {!open ? (
            <BsFillMenuButtonWideFill
              onClick={() => setOpen((prev) => !prev)}
              className="mobile__icon"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpen((prev) => !prev)}
              className="mobile__icon"
            />
          )}
        </div>
        {open && (
          <ul onClick={clickedHandler} className="mobile__list">
            <li href="home" className="mobile__item">
              Home
            </li>
            <li href="about" className="mobile__item">
              About
            </li>
            <li href="portfolio" className="mobile__item">
              Portfolio
            </li>
            <li href="blog" className="mobile__item">
              Blog
            </li>
            <li href="contact" className="mobile__item">
              Contact
            </li>
          </ul>
        )}
      </nav>
    </>
  );
});
export default Navigation;
