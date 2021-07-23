import './HomePage.scss';
import { Component } from 'react';
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Ticker from '../../components/Ticker/Ticker'
import Contact from '../../components/Contact/Contact'

class HomePage extends Component {

    render () {
        return (
            <section>
                <Nav />
                <Hero />
                <Ticker />
                <About />
                <Projects />
                <Contact />
            </section>
            
        )
    }
}

export default HomePage;