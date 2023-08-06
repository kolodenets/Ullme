import cn from "classnames";

import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions.js";
import MainLogo from "../../../public/assets/icons/ullme-web.svg";
import MainLogoMob from "../../../public/assets/icons/ullme-mob.svg";
import CloseBurger from "../../../public/assets/icons/closeX44.svg";
import Popup from "../../components/Popup/Popup.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Header.module.scss";
import LoginForm from "../LoginForm/loginForm.js";
import RegForm from "../RegistrationForm/regForm.js";
import { toggleLogin, toggleRegistration } from "../../store/slices/formsSlice.js";
import { AppDispatch, RootState } from "../../store/store.js";
import { UseFormProps } from "react-hook-form";
import UserWeb from "../../../public/assets/icons/user20.svg";
import UserMob from "../../../public/assets/icons/user16.svg";
import { logoutUser } from "../../shared/api/auth.js";

const Header = () => {
  const size = useWindowDimensions();
  const [languageItemActive, setLanguageItemActive] = useState(1);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [email, setEmail] = useState<string | null>(null)
  const userMail = localStorage.getItem('mail')

  const navigate = useNavigate();
  const activeLogin = useSelector(
    (state: RootState) => state.forms.activeLogin
  );
  const activeRegistration = useSelector(
    (state: RootState) => state.forms.activeRegistration
  );
  const dispatch: AppDispatch = useDispatch();
  const logFormRef = useRef<UseFormProps<FormData>>(null);
  const regFormRef = useRef<UseFormProps<FormData>>(null);
  const navigateTo = (page: string) => {
    navigate(page);
  };

  const logout = async () => {
    const result = await logoutUser()
    if(result?.status === 200) {
      localStorage.removeItem('mail')
      setEmail(null)
    }
  }
  const handleAuthClick = () => {
    if(userMail) {
      logout()
    } else {
      dispatch(toggleLogin(true))
    }
  }

  useEffect(() => {
    setEmail(userMail)
  }, [userMail])

  return (
    <header className={s.header}>
      <div className={cn("container")}>
        <div className={s.flexContainer}>
          <img
            src={size.width > 768 ? MainLogo : MainLogoMob}
            className={s.logoImg}
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
                <a href="mailto:contact@ullme.com">contact@ullme.com</a>
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
            <div className={s.loginContainer} role="button" onClick={handleAuthClick}>
              <img src={size.width > 768 ? UserWeb : UserMob} alt="avatar" />
              {email ? <span>{email}</span> : <span>Log in</span>}
            </div>
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
              <a href="mailto:contact@ullme.com">contact@ullme.com</a>
            </li>
          </ul>
        </div>
      </div>
      <Popup active={isPopupActive} onClose={() => setIsPopupActive(false)} contentClass={s.rounded}>
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
      <Popup
          active={activeRegistration}
          className={s.customPopup}
          onClose={() => {
            dispatch(toggleRegistration(false));
            (regFormRef as any)?.current?.resetForm();
          }}
        >
          <div className={s.regPopup}>
            <RegForm ref={regFormRef} />
          </div>
        </Popup>
    </header>
  );
};

export default Header;
