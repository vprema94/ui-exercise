import React from 'react';
import { Segment } from 'semantic-ui-react';
import EmailRow from './emailRow';
import { connect } from 'react-redux';
import '../stylesheets/emailContainer.css';

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
            !message.isDeleted && message.tags.includes(selectedTag)
         ))
      }
   }

   const mapMessages = filteredEmails().map(((message, i) => 
      <EmailRow key={i} id={message.id} subject={message.subject} sender={message.sender} date={message.date} isSelected={message.isSelected}/>
   ))

   return (
      <div id='email-container'>
         <Segment.Group>
            {mapMessages}
         </Segment.Group>
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