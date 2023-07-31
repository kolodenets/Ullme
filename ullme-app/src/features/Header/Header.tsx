import cn from "classnames";

import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions.js";
import MainLogo from "../../../public/assets/icons/ullme-web.svg";
import MainLogoMob from "../../../public/assets/icons/ullme-mob.svg";
import CloseBurger from "../../../public/assets/icons/closeBtn.svg";
import Popup from "../../components/Popup/Popup.js";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Header.module.scss";
import LoginForm from "../LoginForm/loginForm.js";
import { toggleLogin } from "../../store/slices/formsSlice.js";
import { AppDispatch, RootState } from "../../store/store.js";
import { UseFormProps } from "react-hook-form";

const Header = () => {
  const size = useWindowDimensions();
  const [languageItemActive, setLanguageItemActive] = useState(1);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const navigate = useNavigate();
  const activeLogin = useSelector(
    (state: RootState) => state.forms.activeLogin
  );
  const dispatch: AppDispatch = useDispatch();
  const logFormRef = useRef<UseFormProps<FormData>>(null);
  const navigateTo = (page: string) => {
    navigate(page);
  };

  const handleBurgerLinkClick = (page: string) => {
    setBurgerMenuActive(false);
    navigateTo(page);
  };

  return (
    <header className={s.header}>
      <div className={cn("container")}>
        <div className={s.flexContainer}>
          <img
            src={size.width > 768 ? MainLogo : MainLogoMob}
            alt="logo"
            onClick={() => navigateTo("/")}
          />
          <nav className={s.navbar}>
            <ul className={s.navbar__menu}>
              <li
                className={cn(s.navbar__menu_item)}
                onClick={() => setIsPopupActive(true)}
              >
                About Us
              </li>
              <li className={cn(s.navbar__menu_item)}>
                <a href="mailto:ullme@ullme.com"></a>ullme@ullme.com
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
              className={cn(s.navbar__menu_item)}
              onClick={() => setIsPopupActive(true)}
            >
              About Us
            </li>
            <li className={cn(s.navbar__menu_item)}>
              <a href="mailto:ullme@ullme.com"></a>ullme@ullme.com
            </li>
          </ul>
        </div>
      </div>
      <Popup active={isPopupActive} onClose={() => setIsPopupActive(false)}>
        <div className={s.popup}>
          <h1 className={s.popup__title}>ULLME</h1>
          <h4 className={s.popup__subtitle}>AI service knows the answer!</h4>
          <div className={s.popup__list}>
            Our small technology company has been developing services based on
            neural networks for photo and video processing for over 7 years.{" "}
            <br /> Our services are used by many companies to increase visitor
            loyalty. <br />
            <br />
            Today we offer a new product based on neural networks processing of
            facial photos.
            <br />
            <br /> Our attention was attracted by a large number of articles and
            researches of scientists on the issue of similarity of married
            couples. <br /> We have done a lot of work!
            <br />
            <br /> Meet ULLME — a neural network based service for determining
            the similarity of 2 people. The comparison is based on 512
            parameters, which ensures high accuracy of the results!
            <br />
            <br /> And how much do you resemble your soulmate? Check it out!
          </div>
        </div>
      </Popup>
      <Popup
          active={activeLogin}
          className={s.customPopup}
          onClose={() => {
            dispatch(toggleLogin(false));
            (logFormRef as any)?.current?.resetForm();
          }}
        >
          <div className={s.logPopup}>
            <LoginForm ref={logFormRef} />
          </div>
        </Popup>
    </header>
  );
};

export default Header;
