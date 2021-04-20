import React from 'react';
import { Segment, Checkbox, Label, Icon, Grid } from 'semantic-ui-react';
import '../stylesheets/emailRow.css';


const EmailRow = ({id, subject, sender, date, isSelected}) => {

   const formattedDate = new Date(date).toDateString()

   return (
      <Grid.Row class='email-row-container' id={id}>
         <div id='icons'>
            <Checkbox checked={isSelected}/>
            <Icon name='star'/>
         </div>
         <b id='sender'>{sender}</b>
         <b id='subject'>{subject}</b>
         <b id='date'>{formattedDate}</b>
      </Grid.Row>
   )
} 

export default EmailRow