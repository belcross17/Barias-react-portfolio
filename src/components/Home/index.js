import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle  from '../../assets/images/logo-b.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] =  useState('text-animate')
    const nameArray = ['P', 'o', 'r', 't', 'f','o', 'l', 'i', 'o']
    const jobArray = ['F','u', 'l', 'l', ' ', 'S','t', 'a', 'c', 'k', ' ', 'W', 'e', 'b', ' ','D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',]
    
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> Welcome to <br />
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2> Future Frontend Developer / Registered Nurse / Anime Lover</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    </>
    );
}

export default Home;