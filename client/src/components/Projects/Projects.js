import './Projects.scss';
import { Component } from 'react';

import ProjectsIcon from '../../assets/SectionIcons/Projects.svg'

class Projects extends Component {

    render () {
        return (
            <section className='projects'>
                <div className='projects__headerContainer'>
                    <div className='projects__headerTabContainer'>
                        <div className='projects__headerBackLeft'>
                            <div className='projects__headerFrontLeft'>
                            </div>
                        </div>
                        <div className='projects__headerBackMain'>
                            <h1 className='projects__header'><img className='projects__headerIcon' src={ProjectsIcon} alt='projects-header-icon'/>My Projects</h1>
                        </div>
                        <div className='projects__headerBackRight'>
                            <div className='projects__headerFrontRight'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projects__bodyContainer'>
                    <div className='projects__itemContainer'>
                        <h2 className='projects__itemHeader'>Gemini Fitness App</h2>
                        <p className='projects__itemBody'>Gemini is a user friendly fitness tracking app. </p>
                        <p className='projects__itemBody'>Built with JavaScript, React.js, Scss, Express.js and MongoDB. </p>
                        <a target='_blank' href='https://github.com/nick-albu/Gemini' className='projects__itemLink'>
                            Gemini github repository</a>
                    </div>
                    <div className='projects__itemContainer'>
                        <h2 className='projects__itemHeader'>Date Knight</h2>   
                        <p className='projects__itemBody'>With COVID restrictions letting up, DateKnightmakes planning quality time out easy. </p>
                        <p className='projects__itemBody'>Built with Javascript, React.js and Scss</p>
                        <a target='_blank' href='https://www.dateknight.fun' className='projects__itemLink'>
                            www.dateknight.fun</a>
                    </div>
                    <div className='projects__itemContainer'>
                        <h2 className='projects__itemHeader'>Wooshi World</h2>
                        <p className='projects__itemBody'>Built an NFT distribution website with scroll animations, videos playing sequentially after one another, and a gallery with +11,000 objects. </p>
                        <p className='projects__itemBody'>Built with Javascript, React.js, Scss and React-window/autosizer libraries</p>
                        <a target='_blank' href='https://www.wooshi.world' className='projects__itemLink'>
                            wooshi.world</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;