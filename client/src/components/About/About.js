import './About.scss';
import { Component } from 'react';
import AboutIcon from '../../assets/SectionIcons/AboutMe.svg'

class About extends Component {

    render () {
        return (
            <section className='about'>
                <div className='about__headerContainer'>
                    <div className='about__headerTabContainer'>
                        <div className='about__headerBackLeft'>
                            <div className='about__headerFrontLeft'>
                            </div>
                        </div>
                        <div className='about__headerBackMain'>
                            <h1 className='about__header'>About Me<img className='about__headerIcon' src={AboutIcon} alt='about-header-icon'/></h1>
                        </div>
                        <div className='about__headerBackRight'>
                            <div className='about__headerFrontRight'>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='about__bodyContainer'>
                    <p className='about__body'>I love developing. It lets me be creative
                    and solve problems at the same time, it also means I love what I do every day.</p>
                    <p className='about__body'>I've recently made a career change
                    into web development. After graduating at BrainStation's Web Development program
                    I'm currently looking for a Junior Developer role and working on my own projects.</p>
                </div>
            </section>
        )
    }
}

export default About;