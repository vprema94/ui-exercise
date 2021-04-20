import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import EmailContainer from './emailContainer';
import IconBar from './iconBar';

const LandingPage = () => { 

   return (
      <Grid celled='internally'>
         <Grid.Row>
            <Header>GMAIL</Header>
         </Grid.Row>
         <Grid.Row>
            <Grid.Column width={3}>
               <b>Left Column</b>
            </Grid.Column>
            <Grid.Column width={13}>
               <Grid.Row>
                  <IconBar />
               </Grid.Row>
               <Grid.Row>
                  <EmailContainer/>
               </Grid.Row>
            </Grid.Column>
         </Grid.Row>
      </Grid>

   )
}

export default LandingPage; 