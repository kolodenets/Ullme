import { useState } from "react";
import cn from 'classnames'
import s from "./Navbar.module.scss";

const Navbar = () => {
  const [menuItemActive, setMenuItemActive] = useState(1)
  const [languageItemActive, setLanguageItemActive] = useState(1)
  return (
    <nav className={s.navbar}>
      <ul className={s.navbar__menu}>
        <li className={cn(s.navbar__menu_item, {[s.active]: menuItemActive === 1})} onClick={() => setMenuItemActive(1)}>О нас</li>
        <li className={cn(s.navbar__menu_item, {[s.active]: menuItemActive === 2})} onClick={() => setMenuItemActive(2)}>Контакт</li>
      </ul>
      <ul className={s.navbar__languages}>
        <li className={cn(s.navbar__menu_item, {[s.active]: languageItemActive === 1})} onClick={() => setLanguageItemActive(1)}>EN</li>
        <li className={cn(s.navbar__menu_item, {[s.active]: languageItemActive === 2})} onClick={() => setLanguageItemActive(2)}>ES</li>
        <li className={cn(s.navbar__menu_item, {[s.active]: languageItemActive === 3})} onClick={() => setLanguageItemActive(3)}>RU</li>
      </ul>
    </nav>
  )
}
export default Navbar