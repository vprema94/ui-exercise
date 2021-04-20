import React from 'react';
import { Grid } from 'semantic-ui-react';
import EmailRow from './emailRow';
import { connect } from 'react-redux';

const EmailContainer = ({emails}) => {

   const mapMessages = emails.map((message => 
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
     emails: state
   })
}

export default connect(mapStatetoProps)(EmailContainer)