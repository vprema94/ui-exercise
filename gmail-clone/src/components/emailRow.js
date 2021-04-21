import React from 'react';
import { Checkbox, Icon, Segment } from 'semantic-ui-react';
import '../stylesheets/emailContainer.css';
import { connect } from 'react-redux';
import { handleCheckbox } from '../store/actions';

const EmailRow = ({id, subject, sender, date, isSelected, handleCheckbox, emails}) => {

   const formattedDate = new Date(date).toDateString()

   const onCheckboxClick = () => {
      let newMessages = emails
      const objIndex = newMessages.findIndex((message => message.id === id))
      newMessages[objIndex].isSelected = !emails[objIndex].isSelected
      handleCheckbox(newMessages)
   }

   return (
      <Segment id='email-row-container' data-testid='emailRow'>
         <div id='icons'>
            <Checkbox checked={isSelected} onClick={onCheckboxClick}/>
            <Icon name='star' color='yellow'/>
         </div>
         <div id='sender'>
            <b>{sender}</b>
         </div>
         <div id='subject'>
            <b>{subject}</b>
         </div>
         <div id='date'>
            <b>{formattedDate}</b>
         </div>
      </Segment>
   )
}  

const mapStatetoProps = state => {
   return ({
     emails: state.messages
   })
}

export default connect(mapStatetoProps, { handleCheckbox })(EmailRow)