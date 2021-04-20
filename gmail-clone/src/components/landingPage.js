import React from 'react';
import { Grid } from 'semantic-ui-react';
import EmailContainer from './emailContainer';
import IconBar from './iconBar';
import SideBar from './sideBar';
import GmailHeader from './header';
import '../stylesheets/landingPage.css';

const LandingPage = () => { 

   return (
      <Grid celled='internally'>
         <Grid.Row id='header-row'>
            <GmailHeader />
         </Grid.Row>
         <Grid.Row id='content-row'>
            <Grid.Column width={2}>
               <SideBar/>
            </Grid.Column>
            <Grid.Column width={14}>
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