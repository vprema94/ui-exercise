import React from 'react';
import EmailRow from './emailRow';

const LandingPage = () => {

   const emails = require('../emails.json')

   const mapMessages = emails.messages.map((message => 
      <EmailRow/>
   ))

   return (
      <div>
         {mapMessages}
      </div>
   )
}

export default LandingPage;