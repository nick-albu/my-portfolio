import './TechStack.scss'
import { Component } from 'react';
import JavaScript from '../../assets/TechStackIcons/javascript.svg'
import Expressjs from '../../assets/TechStackIcons/express.svg'
import HTML5 from '../../assets/TechStackIcons/html5.svg'
import Mongo from '../../assets/TechStackIcons/mongodb.svg'
import Reactjs from '../../assets/TechStackIcons/react.svg'
import Sass from '../../assets/TechStackIcons/sass.svg'
import TechStackIcon from '../../assets/SectionIcons/TechStack.svg'

class TechStack extends Component {
    render () {
        return (
            <section className='techStack'>
                <div className='techStack__headerContainer'>
                    <div className='techStack__headerTabContainer'>
                        <div className='techStack__headerBackLeft'>
                            <div className='techStack__headerFrontLeft'>
                            </div>
                        </div>
                        <div className='techStack__headerMain'>
                            <h1 className='techStack__header'>Language Proficiencies<img className='techStack__headerIcon' src={TechStackIcon}/></h1>
                        </div>
                        <div className='techStack__headerBackRight'>
                            <div className='techStack__headerFrontRight'>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='techStack__list'>
                    <li className='techStack__item'><img className='techStack__icon' src={JavaScript}/></li>
                    <li className='techStack__item'><img className='techStack__icon' src={Reactjs}/></li>
                    <li className='techStack__item'><img className='techStack__iconLarge' src={Expressjs}/></li>
                    <li className='techStack__item'><img className='techStack__icon' src={Mongo}/></li>
                    <li className='techStack__item'><img className='techStack__icon' src={Sass}/></li>
                    <li className='techStack__item'><img className='techStack__icon' src={HTML5}/></li>
                </ul>
            </section>
        )
    }
}

export default TechStack;