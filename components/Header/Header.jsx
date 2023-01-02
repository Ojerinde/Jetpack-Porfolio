import { useEffect, useRef } from "react";
import NameCard from "./NameCard/NameCard";
import Navigation from "./Navigation/Navigation";
import Video from "./Video";

const Header = () => {
  const headerRef = useRef();
  const navigationRef = useRef();

  useEffect(() => {
    const navHeight = navigationRef?.current?.getBoundingClientRect().height;
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    headerObserver.observe(headerRef?.current);
  }, []);

  // FUnction to be called by the observer
  const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) navigationRef?.current?.classList.add("sticky");
    else navigationRef?.current?.classList.remove("sticky");
  };

  return (
    <header className="header" ref={headerRef} id="header">
      <Navigation ref={navigationRef} />
      <NameCard />
      <Video />
    </header>
  );
};
export default Header;
