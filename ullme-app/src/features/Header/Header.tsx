import { useNavigate } from "react-router-dom";
import cn from 'classnames'
import MainLogo from '../../../public/assets/icons/mainLogo.svg'
import s from './Header.module.scss'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={s.header}>
      <div className={cn('container')}>
        <div className={s.flexContainer}>
          <img src={MainLogo} alt="logo" onClick={() => navigate('/')}/>
          <button className={s.burgerButton}>
          </button>
        </div>
    </div>
    </header>
    
  )
}

export default Header