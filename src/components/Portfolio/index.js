import React, { useState } from "react";
import Loader from "react-loaders";
import runBuddy from '../../assets/images/run-buddy.png'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";


const Portfolio = () => { 
    const [letterClass] = useState('text-animate');
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="portfolio-container">
                <div className="images-container">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" to=""/>
                </div>
                <div className="images-container">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" to=""/>
                </div>
                <div className="images-container">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" to=""/>
                </div>
                <div className="images-container">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" to=""/>
                </div>
                <div className="images-container">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" to=""/>
                </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;