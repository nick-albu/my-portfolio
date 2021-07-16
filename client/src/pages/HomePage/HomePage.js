import './HomePage.scss';
import { Component } from 'react';
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'

class HomePage extends Component {

    render () {
        return (
            <section>
                <Nav />
                <Hero />
                <About />
                <Projects />
            </section>
            
        )
    }
}

export default HomePage;