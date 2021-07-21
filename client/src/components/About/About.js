import './About.scss';
import { Component } from 'react';

class About extends Component {

    render () {
        return (
            <section className='about'>
                <h1 className='about__header'>About Me</h1>
                <p className='about__body'>I love developing. It let's me be creative
                and solve problems at the same time, it also let's me love what I do every day.</p>
            </section>
        )
    }
}

export default About;