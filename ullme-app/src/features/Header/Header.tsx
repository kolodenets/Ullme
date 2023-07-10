import cn from 'classnames'
import MainLogo from '../../../public/assets/icons/ullme-web.svg'
import BurgerMenu from '../../../public/assets/icons/burger.svg'
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={cn('container')}>
        <div className={s.flexContainer}>
          <img src={MainLogo} alt="logo" />
          <button className={s.burgerButton}>
            {/* <img src={BurgerMenu} alt="burger" /> */}
          </button>
        </div>
    </div>
    </header>
    
  )
}

export default Header