import './HomePage.scss';
import { Component } from 'react';
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Ticker from '../../components/Ticker/Ticker'
import Contact from '../../components/Contact/Contact'
import TechStack from '../../components/TechStack/TechStack'

class HomePage extends Component {

    render () {
        return (
            <section>
                <Nav />
                <Hero />
                <Ticker />
                <About />
                <Projects />
                <TechStack />
                <Contact />
            </section>
        )
    }
}

export default HomePage;