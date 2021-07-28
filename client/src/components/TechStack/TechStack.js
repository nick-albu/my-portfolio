import './TechStack.scss'
import { Component } from 'react';

class TechStack extends Component {
    render () {
        return (
            <section className='techStack'>
                <h1 className='techStack__header'>Languages I've Learned</h1>
                <ul className='techStack__list'>
                    <li className='techStack__item'>JavaScript<img /></li>
                    <li className='techStack__item'>React.js<img /></li>
                    <li className='techStack__item'>Express.js<img /></li>
                    <li className='techStack__item'>MongoDB<img /></li>
                    <li className='techStack__item'>Scss<img /></li>
                    <li className='techStack__item'>HTML 5<img /></li>
                </ul>
            </section>
        )
    }
}

export default TechStack;