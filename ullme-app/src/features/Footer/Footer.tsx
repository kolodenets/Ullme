import s from './Footer.module.scss'
import Instagram from "../../../public/assets/icons/InstagramLogo.svg";
import Twitter from "../../../public/assets/icons/TwitterLogo.svg";
import Facebook from "../../../public/assets/icons/fi_facebook.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <img src={Instagram} alt="instagram" />
        <img src={Twitter} alt="teitter" />
        <img src={Facebook} alt="facebook" />
      </div>
    </footer>
  )
}

export default Footer