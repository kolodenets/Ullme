import cn from "classnames";
import Navbar from "../Navbar/Navbar";

import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions.js";
import MainLogo from "../../../public/assets/icons/ullme-web.svg";
import MainLogoMob from "../../../public/assets/icons/ullme-mob.svg";

import s from "./Header.module.scss";

const Header = () => {
  const size = useWindowDimensions();
  return (
    <header className={s.header}>
      <div className={cn("container")}>
        <div className={s.flexContainer}>
          <img
            src={size.width > 768 ? MainLogo : MainLogoMob}
            alt="logo"
          />
          <Navbar />
          <button className={s.burgerButton}>
            {/* <img src={BurgerMenu} alt="burger" /> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
