import { Header } from 'semantic-ui-react';
import '../stylesheets/header.css';
import gmail from '../images/gmail.svg'

const GmailHeader = () => {
   return (
      <div id='header-container'>
         <img src={gmail} id='logo'/>
         <Header id='header' content='GMAIL' size='large'/>
      </div>
   )
} 

export default GmailHeader 

