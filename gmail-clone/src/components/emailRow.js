import React from 'react';
import { Segment, Checkbox, Label, Icon } from 'semantic-ui-react';
import '../stylesheets/emailRow.css';


const EmailRow = () => {
   return (
      <Segment id='email-row-container'>
         <div id='icons'>
            <Checkbox />
            <Icon name='star'/>
         </div>
         <b id='sender'>Sender</b>
         <b id='subject'>Subject</b>
         <b id='date'>Date</b>
      </Segment>
   )
} 

export default EmailRow