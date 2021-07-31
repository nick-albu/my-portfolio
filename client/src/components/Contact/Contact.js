import './Contact.scss';
import { Component } from 'react';
import Email from '../../assets/EmailIcon.png'
import GitHub from '../../assets/GitHubIcon.png'
import LinkedIn from '../../assets/LinkedInIcon.png'
import ContactIcon from '../../assets/SectionIcons/Contact.svg'

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
                            <h1 className='contact__header'><img className='contact__headerIcon' src={ContactIcon}/>Contact Me</h1>
                        </div>
                </div>
                <div className='contact__bodyContainer'>
                    <p className='contact__bodyParagraph'>Right now I'm spending my time learning new languages, stretching my
                        development wings and looking for work.
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