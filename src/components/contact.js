import Github from '../assets/github'
import Linkedin from '../assets/linkedin'
import './contact.css'
const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <p>
          Have questions, suggestions, or just want to get in touch? Don't
          hesitate to reach out. I'm here to listen and assist.
        </p>
      </div>
      <div className='contacts'>
        <div className='socials'>
            <div><Github/>  <a href='https://github.com/ManNavic'>Github</a></div>
            <div><Linkedin/>  <a href='https://www.linkedin.com/in/navickis-mantas'>Linkedin</a></div>
        </div>
        <div className='contactMe'>
          <p>
            I'm always excited to connect with new people and explore
            opportunities. Whether you want to discuss a potential
            collaboration, have a question, or just want to say hello, feel free
            to reach out to me. I'm just an email away!
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:mantas@navickis.com">mantas@navickis.com</a>
          </p>
          <p>
            Let's start a conversation, and I'll get back to you as soon as
            possible. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  )
}
export default Contact
