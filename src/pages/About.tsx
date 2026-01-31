import whatsapplogo from '../assets/whatsapp.jpg';
import linkedinlogo from '../assets/linkedin.jpg';
import githublogo from '../assets/github.jpg';
import gmaillogo from '../assets/email.jpg';
import styles from '../Styles/About.module.css'
import Footer from '../components/Footer';
const About = () => {
  return (
   <Details/>
  )
}

export default About
const Details=()=>
{
const address = 'aarufloyd@gmail.com';
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${address}&su=Hello%20Aarogya&body=I%20wanted%20to%20reach%20out%20to%20you.`;
  const github = 'https://github.com/floyd-pink';
  const linkedin = 'https://www.linkedin.com/in/aarogya-chaulagain-467007377';
  const whatsapp = 'https://wa.me/9779865385598?text=Hello%20Aarogya';
  const number = '+977 9865385598';
  const linkedinProfile = 'Aarogya Floyd';
  const githubProfile = 'floyd-pink';

  const contacts=[
    {href:whatsapp,icon:whatsapplogo,alt:'Whatsapp',label:number},
    {href:github,icon:githublogo,alt:'Github',label:githubProfile},
    {href:linkedin,icon:linkedinlogo,alt:'Linkedin',label:linkedinProfile},
    {href:gmailLink,icon:gmaillogo,alt:'Email',label:address},
  ]
  return(<>
   <div className={styles.main}>
    <div className={styles.name}> {linkedinProfile}</div>
    <ul className={styles.list}>
      {contacts.map((contact,index)=>
      (
        <li key={index}>
          <a href={contact.href} target='_blank' rel='noopener noreferrer' className={styles.link}>
            <img src={contact.icon} alt={contact.alt} className={styles.icon}/>
            <span>{contact.label}</span>
          </a>
        </li>
      ))}
    </ul>
   </div>
   <Footer/>
  </>)
};