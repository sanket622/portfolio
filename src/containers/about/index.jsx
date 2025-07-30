import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import {DiApple, DiAndroid} from 'react-icons/di'
import {FaDev, FaDatabase} from 'react-icons/fa'

const personalDetails = [
  {
    label: 'Name',
    value: 'Sanket Kumar',
  },
  {
    label: 'Age',
    value: '26',
  },
  {
    label: 'Address',
    value: 'Ward no. 17 , laxamana nagar ringh bandh , sitamarhi, Bihar , 843302',
  },
  {
    label: 'Email',
    value: 'sanketkumar0068@gmail.com',
  },
  {
    label: 'Phone',
    value: '9102800988',
  },
]

const jobSummary =
  'MERN Stack Developer with 1.4 years of experience in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in RESTful API development, Redux state management, and JWT authentication. Passionate about delivering clean, maintainable code and collaborating in agile teams to create high-performance solutions.'

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">

      <div className='about__content__personalWrapper'>
      <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-900px)',
          }}
          end={{
            transform: 'translateY(0)',
          }}
        >
          <h3>MERN Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(500px)',
          }}
          end={{
            transform: 'translateY(0)',
          }}
        >

        <h3 className='personalInformationHeaderText'>Personal Information</h3>
        <ul>
          {
            personalDetails.map((item,i)=>(
              <li key={i}>
                <span className='title'>{item.label}</span>
                <span className='value'>{item.value}</span>
              </li>
            ))
          }
        </ul>
        </Animate></div>
      <div className='about__content__servicesWrapper'>
      <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(500px)',
          }}
          end={{
            transform: 'translateY(0)',
          }}
        >
      <div className='about__content__servicesWrapper__innerContent'>
      <div>
          <FaDev size={60} color='var( --yellow-theme-main-color)'/>
        </div>
        <div>
        <DiAndroid size={60} color='var( --yellow-theme-main-color)'/>
        </div>
        <div>
        <FaDatabase size={60} color='var( --yellow-theme-main-color)'/>
        </div>
        <div>
        <DiApple size={60} color='var( --yellow-theme-main-color)'/>
        </div>
      </div>
      </Animate>
      </div>
      </div>
    </section>
  )
}

export default About
