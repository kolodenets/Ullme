import cn from "classnames";

import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions.js";
import MainLogo from "../../../public/assets/icons/ullme-web.svg";
import MainLogoMob from "../../../public/assets/icons/ullme-mob.svg";
import CloseBurger from "../../../public/assets/icons/closeBtn.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  const size = useWindowDimensions();
  const [menuItemActive, setMenuItemActive] = useState(0);
  const [languageItemActive, setLanguageItemActive] = useState(1);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const navigate = useNavigate();

  const navigateTo = (id: number, page: string) => {
    setMenuItemActive(id);
    navigate(page)
  }

  const handleBurgerLinkClick = (id: number, page: string) => {
    setBurgerMenuActive(false);
    navigateTo(id, page)
  }



  return (
    <header className={s.header}>
      <div className={cn("container")}>
        <div className={s.flexContainer}>
          <img
            src={size.width > 768 ? MainLogo : MainLogoMob}
            alt="logo"
            onClick={() => navigateTo(0, '/')}
          />
          <nav className={s.navbar}>
            <ul className={s.navbar__menu}>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: menuItemActive === 1,
                })}
                onClick={() => navigateTo(1, '/about')}
              >
                О нас
              </li>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: menuItemActive === 2,
                })}
                onClick={() => navigateTo(2, '/contact')}
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
          <button
            className={s.burgerButton}
            onClick={() => setBurgerMenuActive(true)}
          >
            {/* <img src={BurgerMenu} alt="burger" /> */}
          </button>
        </div>
      </div>

      <div
        className={cn(s.burgerMenu, { [s.activeBurgerMenu]: burgerMenuActive })}
      >
        <div className={s.burgerContainer}>
          <div className={s.closeBurgerBtn}>
            <img
              src={CloseBurger}
              role="button"
              alt="close"
              onClick={() => setBurgerMenuActive(false)}
            />
          </div>
          <p className={s.burgerTitle}>Ullme</p>
          <p className={s.burgerSubtitle}>AI service knows the answer!</p>
          <ul className={s.burgerMenu__languages}>
            <li
              className={cn(s.navbar__menu_item, s.burgerMenu__languages_item, {
                [s.active]: languageItemActive === 1,
              })}
              onClick={() => setLanguageItemActive(1)}
            >
              EN
            </li>
            <li
              className={cn(s.navbar__menu_item, s.burgerMenu__languages_item, {
                [s.active]: languageItemActive === 2,
              })}
              onClick={() => setLanguageItemActive(2)}
            >
              ES
            </li>
            <li
              className={cn(s.navbar__menu_item, s.burgerMenu__languages_item, {
                [s.active]: languageItemActive === 3,
              })}
              onClick={() => setLanguageItemActive(3)}
            >
              RU
            </li>
          </ul>
          <ul className={cn(s.navbar__menu, s.burgerMenu__links)}>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: menuItemActive === 1,
                })}
                onClick={() => handleBurgerLinkClick(1, '/about')}
              >
                О нас
              </li>
              <li
                className={cn(s.navbar__menu_item, {
                  [s.active]: menuItemActive === 2,
                })}
                onClick={() => handleBurgerLinkClick(2, '/contact')}
              >
                Контакт
              </li>
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
