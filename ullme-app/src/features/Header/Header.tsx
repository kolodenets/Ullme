import cn from 'classnames'
import MainLogo from '../../../public/assets/icons/ullme-web.svg'
import MainLogoMob from '../../../public/assets/icons/ullme-white.svg'
import BurgerMenu from '../../../public/assets/icons/burger.svg'
import s from './Header.module.scss'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={cn('container')}>
        <div className={s.flexContainer}>
          <img src={window.innerWidth > 768 ? MainLogo : MainLogoMob} alt="logo" />
          <Navbar/>
          <button className={s.burgerButton}>
            {/* <img src={BurgerMenu} alt="burger" /> */}
          </button>
        </div>
    </div>
    </header>
    
  )
}

export default Header