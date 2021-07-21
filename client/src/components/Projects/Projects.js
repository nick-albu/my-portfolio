import './Projects.scss';
import { Component } from 'react';
import GeminiLogo from '../../assets/GeminiLogo.svg';
import GeminiLanding from '../../assets/GeminiLandingPage.PNG';
import GeminiCreate from '../../assets/GeminiCreatePage.PNG';
import GeminiPrevious from '../../assets/GeminiPreviousWorkouts.PNG';
import GeminiWorkout from '../../assets/GeminiWorkoutPage.PNG';

class Projects extends Component {

    render () {
        return (
            <section className='projects'>
                <h1 className='projects__header'>My Projects</h1>
                <div className='projects__itemContainer'>
                <img className='projects__itemLogo' src={GeminiLogo} alt='gemini-logo'/>
                    <div className='projects__imageContainer'>
                        <img className='projects__itemImage' src={GeminiLanding} alt='gemini-landing'/>
                        <img className='projects__itemImage' src={GeminiCreate} alt='gemini-landing'/>
                        <img className='projects__itemImage' src={GeminiPrevious} alt='gemini-landing'/>
                        <img className='projects__itemImage' src={GeminiWorkout} alt='gemini-landing'/>
                    </div>
                    <p className='projects__itemBody'>Gemini is a user friendly fitness tracking app. 
                    Gemini uses JavaScript, React.js, Scss, Express.js and MongoDB. </p>
                    </div>
            </section>
        )
    }
}

export default Projects;