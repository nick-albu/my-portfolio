import './About.scss';
import { Component } from 'react';

class About extends Component {

    render () {
        return (
            <section className='about'>
                <h1 className='about__header'>About Me</h1>
                <p className='about__body'>I love developing. It let's me be creative
                and solve problems at the same time, it also let's me love what I do every day.</p>
                <p className='about__body'>I'm 31 years old and I've recently made a career change
                into web development. After graduating at BrainStation's Web Development program
                I'm currently looking for a Junior Developer role and working on my own projects.</p>
            </section>
        )
    }
}

export default About;