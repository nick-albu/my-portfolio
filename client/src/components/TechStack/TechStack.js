import './TechStack.scss'
import { Component } from 'react';
import JavaScript from '../../assets/TechStackIcons/javascript.svg'
import Expressjs from '../../assets/TechStackIcons/express.svg'
import HTML5 from '../../assets/TechStackIcons/html5.svg'
import Mongo from '../../assets/TechStackIcons/mongodb.svg'
import Reactjs from '../../assets/TechStackIcons/react.svg'
import Sass from '../../assets/TechStackIcons/sass.svg'

class TechStack extends Component {
    render () {
        return (
            <section className='techStack'>
                <div className='techStack__headerContainer'>
                    <h1 className='techStack__header'>Languages I've Learned</h1>
                </div>
                <ul className='techStack__list'>
                    <li className='techStack__item'>JavaScript<img className='techStack__icon' src={JavaScript}/></li>
                    <li className='techStack__item'>React.js<img className='techStack__icon' src={Reactjs}/></li>
                    <li className='techStack__item'>Express.js<img className='techStack__iconLarge' src={Expressjs}/></li>
                    <li className='techStack__item'>MongoDB<img className='techStack__icon' src={Mongo}/></li>
                    <li className='techStack__item'>Sass<img className='techStack__icon' src={Sass}/></li>
                    <li className='techStack__item'>HTML 5<img className='techStack__icon' src={HTML5}/></li>
                </ul>
            </section>
        )
    }
}

export default TechStack;