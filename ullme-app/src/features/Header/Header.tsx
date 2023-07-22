import cn from "classnames";

import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions.js";
import MainLogo from "../../../public/assets/icons/ullme-web.svg";
import MainLogoMob from "../../../public/assets/icons/ullme-mob.svg";

import s from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const size = useWindowDimensions();
  const [menuItemActive, setMenuItemActive] = useState(0)
  const [languageItemActive, setLanguageItemActive] = useState(1)

  return (
    <header className={s.header}>
      <div className={cn("container")}>
        <div className={s.flexContainer}>
          <img src={size.width > 768 ? MainLogo : MainLogoMob} alt="logo" onClick={() => setMenuItemActive(0)}/>
          <nav className={s.navbar}>
            <ul className={s.navbar__menu}>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: menuItemActive === 1,
                })}
                onClick={() => setMenuItemActive(1)}
              >
                О нас
              </li>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: menuItemActive === 2,
                })}
                onClick={() => setMenuItemActive(2)}
              >
                Контакт
              </li>
            </ul>
            <ul className={s.navbar__languages}>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: languageItemActive === 1,
                })}
                onClick={() => setLanguageItemActive(1)}
              >
                EN
              </li>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: languageItemActive === 2,
                })}
                onClick={() => setLanguageItemActive(2)}
              >
                ES
              </li>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: languageItemActive === 3,
                })}
                onClick={() => setLanguageItemActive(3)}
              >
                RU
              </li>
            </ul>
          </nav>
          <button className={s.burgerButton}>
            {/* <img src={BurgerMenu} alt="burger" /> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
