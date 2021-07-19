import './Hero.scss';
import { Component } from 'react';
import HeroImage from '../../assets/LightMode.svg';

class Hero extends Component {

    render () {
        return (
            <section className='hero'>
                <img className='hero__image' src={HeroImage} alt='hero'/>
            </section>
        )
    }
}

export default Hero;