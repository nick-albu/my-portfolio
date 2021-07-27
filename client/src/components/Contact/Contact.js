import './Contact.scss';
import { Component } from 'react';
import Email from '../../assets/EmailIcon.png'
import GitHub from '../../assets/GitHubIcon.png'
import LinkedIn from '../../assets/LinkedInIcon.png'

class Contact extends Component {

    render () {
        return (
            <section className='contact'>
                <a href=''><img className='contact__icon' src={LinkedIn} alt='linkedin'/></a>
                <a href=''><img className='contact__emailIcon' src={Email} alt='email'/></a>
                <a href=''><img className='contact__icon' src={GitHub} alt='github'/></a>
            </section>
            
        )
    }
}

export default Contact;