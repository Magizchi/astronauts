import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Button from "../components/atoms/button";
import Navigation from "../components/organisms/Navigation";
import { PATH } from "../constants/Routes";
import { Navigation as NavigationType } from "../models/navigation";

interface HeaderProps {
  navigation: NavigationType[];
}
const Header: FunctionComponent<HeaderProps> = ({ navigation }) => {
  return (
    <header className="relative flex justify-center sm:justify-around lg:justify-between xl:items-center xl:py-5 xl:px-8">
      <Link to={PATH.HOME} className="hidden py-2 sm:block">
        <h1 className="text-4xl text-white">Astronauts</h1>
      </Link>
      <Navigation navigation={navigation} />
      <Button className="hidden sm:block" />
    </header>
  );
};

export default Header;
