import './Nav.scss';
import { Component } from 'react';
import Logo from '../../assets/Logo.svg';

class Nav extends Component {

    render () {
        return (
            <section className='nav'>
                <div className='nav__container'>
                    <img className='nav__logo' src={Logo} alt='logo'/>
                </div>
                <h1 className='nav__header'>Nick Albu <span className='nav__header--alternate'>Web Dev</span></h1>
            </section>
        )
    }
}

export default Nav;