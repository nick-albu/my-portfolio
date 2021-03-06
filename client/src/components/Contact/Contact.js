import './Contact.scss';
import { Component } from 'react';
import Email from '../../assets/EmailIcon.png'
import GitHub from '../../assets/GitHubIcon.png'
import LinkedIn from '../../assets/LinkedInIcon.svg'
import ContactIcon from '../../assets/SectionIcons/Contact.svg'

class Contact extends Component {

    render () {
        return (
            <section className='contact'>
                <div className='contact__headerContainer'>
                    <div className='contact__headerTabContainer'>
                        <div className='contact__headerBackLeft'>
                            <div className='contact__headerFrontLeft'>
                        </div>
                        </div>
                        <div className='contact__headerMain'>
                            <h1 className='contact__header'><img className='contact__headerIcon' src={ContactIcon} alt='contact-header-icon'/>Contact Me</h1>
                        </div>
                        <div className='contact__headerBackRight'>
                            <div className='contact__headerFrontRight'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact__bodyContainer'>
                    <p className='contact__bodyParagraph'>Right now I'm between positions and looking for more work while I work on some personal projects.
                        Please reach out to me for anything from chatting about a project or a 
                        new language, to job offers or opportunities. 
                    </p>
                </div>
                <div className='contact__footer'>
                    <a target="_blank" href='https://www.linkedin.com/in/nicolasalbu'><img className='contact__icon' src={LinkedIn} alt='linkedin'/></a>
                    <a target="_blank" href='mailto:nicolasmalbu@gmail.com'><img className='contact__emailIcon' src={Email} alt='email'/></a>
                    <a target="_blank" href='https://github.com/nick-albu'><img className='contact__icon' src={GitHub} alt='github'/></a>
                </div>
            </section>
            
        )
    }
}

export default Contact;