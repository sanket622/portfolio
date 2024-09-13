import AnimatedLetters from '../AnimatedLetters'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useState,useEffect } from 'react'
import Loader from 'react-loaders'

const About = () =>{

  const [letterClass,setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId); // Clear the timeout when the component unmounts
}, []);

    return(
      <>
        <div className='container about-page'>
        <div className='text-zone'>
        <h1>
            <AnimatedLetters 
            letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
            />
        </h1>
        <p>
            I'm a very ambitious MERN developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident that my passion for my work will not only contribute to my personal
            growth but will also add value to the organization.
          </p>
          <p>
            If I need to define myself in one sentence that would be a responsible team-player,
            a sports fanatic, music lover and tech-obsessed!!!
          </p>

        </div>
         <div className='stage-cube-cont'>
         <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
         </div>
        </div>
        <Loader type='pacman' />
        </>
        
    )
}

export default About