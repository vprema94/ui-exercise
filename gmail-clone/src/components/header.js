import { Header } from 'semantic-ui-react';
import '../stylesheets/header.css';
import gmail from '../images/gmail.svg'

const GmailHeader = () => {
   return (
      <div id='header-container'>
         <img src={gmail} alt='GMAIL' id='logo'/>
         <Header id='header' content='GMAIL' size='huge'/>
      </div>
   )
} 

export default GmailHeader 

