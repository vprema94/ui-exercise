import React from 'react';
import { Grid } from 'semantic-ui-react';
import EmailRow from './emailRow';
import { connect } from 'react-redux';

const EmailContainer = ({ emails, selectedTag }) => {

   const filteredEmails = () => {
      if (selectedTag === 'inbox') {
         return emails.filter(message => (
            !message.isDeleted
         ))
      } else if( selectedTag === 'trash') {
         return emails.filter(message => (
            message.isDeleted
         ))
      } else {
         return emails.filter(message => (
            message.tags.includes(selectedTag)
         ))
      }
   }

   const mapMessages = filteredEmails().map((message => 
      <EmailRow id={message.id} subject={message.subject} sender={message.sender} date={message.date} isSelected={message.isSelected}/>
   ))

   return (
      <div>
         <Grid celled>
            {mapMessages}
         </Grid>
      </div>
   )
} 

const mapStatetoProps = state => {
   return ({
     emails: state.messages,
     selectedTag: state.selectedTag
   })
}

export default connect(mapStatetoProps)(EmailContainer)