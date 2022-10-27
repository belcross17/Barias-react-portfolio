import { Link } from 'react-router-dom'
import './index.scss'
import LogoB from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoB} alt="logo" />
            <img src={LogoSubtitle} alt="logo" />
        </Link>
    </div>
    )

export default Sidebar;