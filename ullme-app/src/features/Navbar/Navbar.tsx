import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.navbar__menu}>
        <li className={s.navbar__menu_item}>Menu</li>
      </ul>
    </nav>
  )
}
export default Navbar