import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import EmailRow from './emailRow';
import { connect } from 'react-redux';

const EmailContainer = ({emails}) => {

   const mapMessages = emails.map((message => 
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

const mapStatetoProps = state => {
   return ({
     emails: state
   })
}

export default connect(mapStatetoProps)(EmailContainer)