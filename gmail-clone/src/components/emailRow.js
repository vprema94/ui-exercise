import React, { useState } from 'react';
import { Checkbox, Icon, Grid } from 'semantic-ui-react';
import '../stylesheets/emailRow.css';
import { connect } from 'react-redux';
import { handleCheckbox } from '../store/actions'

const EmailRow = ({id, subject, sender, date, isSelected, handleCheckbox}) => {

   const formattedDate = new Date(date).toDateString()

   const [checked, setChecked] = useState(isSelected);

   const toggleCheckbox = () => {
      setChecked(!checked)
      handleCheckbox(id)
   }

   return (
      <Grid.Row class='email-row-container' id={id}>
         <div id='icons'>
            <Checkbox checked={checked} onClick={toggleCheckbox}/>
            <Icon name='star'/>
         </div>
         <b id='sender'>{sender}</b>
         <b id='subject'>{subject}</b>
         <b id='date'>{formattedDate}</b>
      </Grid.Row>
   )
}  

export default connect(null, { handleCheckbox })(EmailRow)