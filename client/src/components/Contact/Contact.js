import './Contact.scss';
import { Component } from 'react';
import Email from '../../assets/EmailIcon.png'
import GitHub from '../../assets/GitHubIcon.png'
import LinkedIn from '../../assets/LinkedInIcon.png'

class Contact extends Component {

    render () {
        return (
            <section>
                <a href=''><img src={LinkedIn} alt='linkedin'/></a>
                <a href=''><img src={GitHub} alt='github'/></a>
                <a href=''><img src={LinkedIn} alt='email'/></a>
            </section>
            
        )
    }
}

export default Contact;