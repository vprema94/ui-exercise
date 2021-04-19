import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import EmailRow from './emailRow';

const LandingPage = () => {

   const emails = require('../emails.json')

   const mapMessages = emails.messages.map((message => 
      <EmailRow/>
   ))

   return (
      <div>
         <Container>
            {mapMessages}
         </Container>
      </div>
   )
}

export default LandingPage;