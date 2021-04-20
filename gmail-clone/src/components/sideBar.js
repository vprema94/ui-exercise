import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { filterByTag } from '../store/actions'

const SideBar = ({ filterByTag }) => {

   return (
      <div>
         <List divided relaxed>
            <List.Item onClick={() => filterByTag('inbox')}>
               <List.Icon name='inbox' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Inbox</List.Header>
               </List.Content>
            </List.Item>
            <List.Item onClick={() => filterByTag('work')}>
               <List.Icon name='tag' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Work</List.Header>
               </List.Content>
            </List.Item>
            <List.Item onClick={() => filterByTag('travel')}>
               <List.Icon name='tag' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Travel</List.Header>
               </List.Content>
            </List.Item>
            <List.Item onClick={() => filterByTag('trash')}>
               <List.Icon name='trash alternate' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Trash</List.Header>
               </List.Content>
            </List.Item>
         </List>
      </div>
   )
} 

export default connect(null, {filterByTag})(SideBar)