import './Projects.scss';
import { Component } from 'react';

class Projects extends Component {

    render () {
        return (
            <section className='projects'>
                <h1 className='projects__header'>My Projects</h1>
                <p className='projects__body'>My first major project was my capstone assignment
                at BrainStation. Gemini is a user friendly fitness tracking app. Gemini uses JavaScript, React.js, 
                Scss, Express.js and MongoDB. </p>
            </section>
        )
    }
}

export default Projects;