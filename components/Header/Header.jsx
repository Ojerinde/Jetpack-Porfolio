import NameCard from "./NameCard/NameCard";
import Navigation from "./Navigation/Navigation";
import Video from "./Video";

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <NameCard />
      <Video />
    </header>
  );
};
export default Header;
