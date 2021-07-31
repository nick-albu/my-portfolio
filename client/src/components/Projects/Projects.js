import './Projects.scss';
import { Component } from 'react';
import GeminiLanding from '../../assets/GeminiLandingPage.PNG';
import GeminiCreate from '../../assets/GeminiCreatePage.PNG';
import GeminiPrevious from '../../assets/GeminiPreviousWorkouts.PNG';
import GeminiWorkout from '../../assets/GeminiWorkoutPage.PNG';
import ProjectsIcon from '../../assets/SectionIcons/Projects.svg'

class Projects extends Component {

    render () {
        return (
            <section className='projects'>
                <div className='projects__headerContainer'>
                        <div className='projects__headerBackLeft'>
                            <div className='projects__headerFrontLeft'>
                            </div>
                        </div>
                        <div className='projects__headerBackRight'>
                            <h1 className='projects__header'><img className='projects__headerIcon' src={ProjectsIcon}/>My Projects</h1>
                        </div>
                </div>
                <div className='projects__bodyContainer'>
                    <div className='projects__itemContainer'>
                        <h2 className='projects__itemHeader'>Gemini Fitness App</h2>
                        <div className='projects__imageContainer'>
                            <img className='projects__itemImage' src={GeminiLanding} alt='gemini-landing'/>
                            <img className='projects__itemImage' src={GeminiCreate} alt='gemini-landing'/>
                            <img className='projects__itemImage' src={GeminiWorkout} alt='gemini-landing'/>
                            <img className='projects__itemImage' src={GeminiPrevious} alt='gemini-landing'/>
                            
                        </div>
                        <p className='projects__itemBody'>Gemini is a user friendly fitness tracking app. 
                        Gemini uses JavaScript, React.js, Scss, Express.js and MongoDB. </p>
                        <a target='_blank' href='https://github.com/nick-albu/Gemini' className='projects__itemLink'>
                            Gemini github repository</a>
                    </div>
                    <div className='projects__itemContainer'>
                        <h2 className='projects__itemHeader'>Coming Soon...</h2>
                        <div className='projects__imageContainer'>
                        </div>
                        <p className='projects__itemBody'>More about my next project to follow.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;