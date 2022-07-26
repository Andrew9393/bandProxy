import './header.scss'
import { useNavigate } from 'react-router-dom'

import search from '../../image/search.svg'
import notifications from '../../image/notifications.svg'
import avaheader from '../../image/avaheader.jpg'



const Header = () => {

  const navigate = useNavigate();

  return(
    <header className="header">
      <div className="header__title" onClick={() => navigate(-1)}>
        Users
      </div>
      <div className="header__info">
        <div className="header__search"><a href=""><img src={search} alt="" /></a></div>
        <div className="header__notifications"><a href=""><img src={notifications} alt="" /></a></div>
        <div className="header__user-info">
          <div className="header__user-name">Jones Ferdinand</div>
          <div className="header__user-photo">
            <img src={avaheader} alt="" />
          </div>
        </div>
      </div>
      
    </header>
  )
}
export default Header;