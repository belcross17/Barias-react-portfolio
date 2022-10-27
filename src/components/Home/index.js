import { Link } from 'react-router-dom'
import LogoTitle  from '../../assets/images/logo-b.png'
import './index.scss'

const Home = () => {


    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> Welcome to <br />
                <img src={LogoTitle} alt="developer" />
                Portfolio
                <br />
                Full Stack Web Developer
                </h1>
                <h2> Future Frontend Developer / Registered Nurse / Anime Lover</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;