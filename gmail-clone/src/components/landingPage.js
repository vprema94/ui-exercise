import React from 'react';
import { Container, Segment, Grid, Header } from 'semantic-ui-react';
import EmailContainer from './emailContainer';

const LandingPage = () => { 

   return (
      // <div>
      //    <Container>
      //       <EmailContainer/>
      //    </Container>
      // </div> 
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
                  <Header>Top Icons</Header>
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
         <Header>Top Icons</Header>
    </Grid.Row>
    <Grid.Row>
    <EmailContainer/>
    </Grid.Row>
  </Grid.Column>
</Grid.Row>
</Grid>