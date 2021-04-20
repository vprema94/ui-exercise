import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { filterByTag } from '../store/actions'
import '../stylesheets/sideBar.css';

const SideBar = ({ filterByTag }) => {

   return (
      <div id='side-bar-container'>
         <List divided relaxed>
            <List.Item onClick={() => filterByTag('inbox')}>
               <List.Icon name='inbox' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header as='h3'>Inbox</List.Header>
               </List.Content>
            </List.Item>
            <List.Item onClick={() => filterByTag('work')}>
               <List.Icon name='tag' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header as='h3'>Work</List.Header>
               </List.Content>
            </List.Item>
            <List.Item onClick={() => filterByTag('travel')}>
               <List.Icon name='tag' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header as='h3'>Travel</List.Header>
               </List.Content>
            </List.Item>
            <List.Item onClick={() => filterByTag('trash')}>
               <List.Icon name='trash alternate' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header as='h3'>Trash</List.Header>
               </List.Content>
            </List.Item>
         </List>
      </div>
   )
} 

export default connect(null, {filterByTag})(SideBar)