import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import {  } from '../store/actions'

const SideBar = ({ }) => {
   return (
      <div>
         <List divided relaxed>
            <List.Item>
               <List.Icon name='inbox' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Inbox</List.Header>
               </List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='tag' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Work</List.Header>
               </List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='tag' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Travel</List.Header>
               </List.Content>
            </List.Item>
            <List.Item>
               <List.Icon name='trash alternate' size='large' verticalAlign='middle' />
               <List.Content>
                  <List.Header>Trash</List.Header>
               </List.Content>
            </List.Item>
         </List>
      </div>
   )
} 

const mapStatetoProps = state => {
   return ({
     
   })
}

export default connect(mapStatetoProps, {})(SideBar)