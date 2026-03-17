import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { FaJava, FaDatabase, FaServer, FaCloud } from 'react-icons/fa'
import { SiSpringboot, SiApachekafka, SiDocker, SiKubernetes } from 'react-icons/si'

const personalDetails = [
  {
    label: 'Name',
    value: 'Sanket Kumar',
  },
  {
    label: 'Email',
    value: 'sanketkumar0068@gmail.com',
  },
  {
    label: 'Phone',
    value: '9102800988',
  },
  {
    label: 'Location',
    value: 'Bihar, India',
  },
]

const jobSummary =
  'Full Stack Java Developer with hands-on experience in building scalable microservices-based applications using Java, Spring Boot, and React.js. Experienced in developing secure REST APIs with JWT authentication, implementing event-driven architectures using Kafka, and deploying cloud-native applications with Docker, Kubernetes, and AWS. Strong background in building enterprise systems like Loan Management, Healthcare Analytics, and E-commerce platforms with focus on performance, scalability, and clean architecture.'

const highlights = [
  'Built Loan Management System with Spring Boot microservices and React (Redux Toolkit)',
  'Implemented JWT-based authentication and role-based dashboards',
  'Developed Spring Batch processing for healthcare analytics',
  'Worked with Kafka for event-driven architecture and async processing',
  'Deployed applications using Docker, Kubernetes, and AWS',
  'Implemented Redis caching and CI/CD pipelines with Jenkins',
]

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
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translateY(0)' }}
          >
            <h3>Full Stack Java Developer</h3>
            <p>{jobSummary}</p>

            <h3 className='personalInformationHeaderText'>Key Highlights</h3>
            <ul>
              {highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateY(0)' }}
          >
            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className='about__content__servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateY(0)' }}
          >
            <div className='about__content__servicesWrapper__innerContent'>

              <div><FaJava size={60} color='var(--yellow-theme-main-color)' /></div>
              <div><SiSpringboot size={60} color='var(--yellow-theme-main-color)' /></div>
              <div><FaServer size={60} color='var(--yellow-theme-main-color)' /></div>
              <div><SiApachekafka size={60} color='var(--yellow-theme-main-color)' /></div>
              <div><FaDatabase size={60} color='var(--yellow-theme-main-color)' /></div>
              <div><SiDocker size={60} color='var(--yellow-theme-main-color)' /></div>
              <div><SiKubernetes size={60} color='var(--yellow-theme-main-color)' /></div>
              <div><FaCloud size={60} color='var(--yellow-theme-main-color)' /></div>

            </div>
          </Animate>
        </div>

      </div>
    </section>
  )
}

export default About