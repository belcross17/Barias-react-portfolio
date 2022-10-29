import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass] =  useState('text-animate')
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-page'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance  opportunities, especially ambitious or Frontend projects.
                        However, if you have any questions or possible challenges, please don't hesitate to contact me using 
                        the information below.
                    </p>
                    <br />
                    <ul>
                        <li>
                            Email: alfredochabes1@hotmail.com 
                        </li>
                        <li>
                            Phone Number: (786)-234-5421
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;