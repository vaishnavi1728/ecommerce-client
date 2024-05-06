import React from 'react'
import './aboutus.css'
// import insta from '../images/Instagram_icon.png.webg'
import link from '../images/link.webp'

const Aboutus = () => {
  return (
    <>
<h2 id="our-team">Our Team</h2>
<div className="row">
                <div className='container1'>
                    <div className="column">
                        <h2 className='name'>MAYANK KASHYABH</h2>
                        <p className="college">U22ECE066-SVNIT, Surat</p>
                        <p className='about-text'>"Hello there! I'm a passionate individual currently embarking on my second year of the Bachelor of Technology (B.Tech) journey. I have a penchant for maintaining a serene disposition and a deep-seated love for crafting projects that drive my enthusiasm. Beyond my passion for projects, I also take pride in my strong and effective leadership skills."
                        </p>
                    </div>
                    <div className='icons'>
                        {/* Use FontAwesomeIcon components with appropriate icons */}
                        {/* <div className='icon'><a href=''><img src={insta}  /></a></div>
                        <div className='icon'><a href=''><img src={link} /></a></div> */}
                        {/* <div className='icon'><a href=''><FontAwesomeIcon icon={faGithub} /></a></div>
                        <div className='icon'><a href='mailto:devesh1217@yahoo.com'><FontAwesomeIcon icon={faEnvelope} /></a></div> */}
                    </div>
                </div>
                <div className='container1'>
                    <div className="column">
                        <h2 className='name'>HANUSHA JAIN</h2>
                        <p className="college">U22CS066-SVNIT, Surat</p>
                        <p className='about-text'>"Hello there, I'm a dedicated and hardworking individual, driven by a deep passion for technology. I'm currently in my second year of a B.Tech program and have consistently delivered strong academic performance. My technical skills are a point of pride, and I thoroughly enjoy working collaboratively in teams. I'm excited to bring my enthusiasm and expertise to our projects and contribute to their success</p>
                    </div>
                        {/* <div className='icons'>
                            <div className='icon'><a href='#'><img src={insta}/></a></div>
                            <div className='icon'><a href='https://www.linkedin.com/in/hanusha-jain-332b06288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkedin}/></a></div>
                            <div className='icon'><a href='https://github.com/HanushaJain66'><img src={git}/></a></div>
                            <div className='icon'><a href='mailto:hanushajain04@gmail.com'><img src={mail}/></a></div>
                        </div> */}
                </div>
                </div>
</>
  )
}

export default Aboutus
