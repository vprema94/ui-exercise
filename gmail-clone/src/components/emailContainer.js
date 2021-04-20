import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import EmailRow from './emailRow';

const EmailContainer = () => {

   const emails = require('../emails.json')

   const mapMessages = emails.messages.map((message => 
      <EmailRow/>
   ))

   return (
      <div>
         <Grid celled>
            {mapMessages}
         </Grid>
      </div>
   )
}

export default EmailContainer;