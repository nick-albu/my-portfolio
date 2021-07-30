import './Contact.scss';
import { Component } from 'react';
import Email from '../../assets/EmailIcon.png'
import GitHub from '../../assets/GitHubIcon.png'
import LinkedIn from '../../assets/LinkedInIcon.png'

class Contact extends Component {

    render () {
        return (
            <section className='contact'>
                <div className='contact__headerContainer'>
                        <div className='contact__headerBackLeft'>
                            <div className='contact__headerFrontLeft'>
                            </div>
                        </div>
                        <div className='contact__headerBackRight'>
                            <h1 className='contact__header'>Contact Me</h1>
                        </div>
                </div>
                <div className='contact__footer'>
                    <a href='https://www.linkedin.com/in/nicolasalbu'><img className='contact__icon' src={LinkedIn} alt='linkedin'/></a>
                    <a href=''><img className='contact__emailIcon' src={Email} alt='email'/></a>
                    <a href='https://github.com/nick-albu'><img className='contact__icon' src={GitHub} alt='github'/></a>
                </div>
            </section>
            
        )
    }
}

export default Contact;