import React, { useEffect, useState } from 'react';
import { Checkbox, Icon, Grid } from 'semantic-ui-react';
import '../stylesheets/emailRow.css';
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
      <Grid.Row class='email-row-container' id={id}>
         <div id='icons'>
            <Checkbox checked={isSelected} onClick={onCheckboxClick}/>
            <Icon name='star'/>
         </div>
         <b id='sender'>{sender}</b>
         <b id='subject'>{subject}</b>
         <b id='date'>{formattedDate}</b>
      </Grid.Row>
   )
}  

const mapStatetoProps = state => {
   return ({
     emails: state.messages
   })
}

export default connect(mapStatetoProps, { handleCheckbox })(EmailRow)