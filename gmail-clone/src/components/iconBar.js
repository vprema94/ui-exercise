import React from 'react';
import { connect } from 'react-redux';
import { Segment, Checkbox, Icon, Popup } from 'semantic-ui-react';
import { selectAllMessages, deselectAllMessages, updateMessages } from '../store/actions'
import '../stylesheets/iconBar.css';

const IconBar = ({ selectAll, messages, selectAllMessages, deselectAllMessages, updateMessages }) => {

   const toggleCheckbox = () => {
      if (selectAll) {
         let deselectedMessages = messages.map((message) => {
            return {...message, isSelected: false}
          })
         deselectAllMessages(deselectedMessages)
      } else {
         let selectedMessages = messages.map((message) => {
            return {...message, isSelected: true}
          })
         selectAllMessages(selectedMessages)
      }
   } 

   const handleDelete = () => {
      const deletedMessages = messages.map((message) => {
         if (message.isSelected){
             return (
                 {...message, isDeleted: true, isSelected: false}
             )
         } else {
            return (
               {...message}
            )
         }
      }) 
      updateMessages(deletedMessages)
   } 

   const handleInbox = () => {
      const selectedMessages = messages.map((message) => {
         if (message.isSelected){
             return (
                 {...message, isDeleted: false, isSelected: false}
             )
         } else {
            return (
               {...message}
            )
         }
      }) 
      updateMessages(selectedMessages)
   } 

   const checkboxSelected = messages.some(message => (message.isSelected))

   return (
      <div>
         <Segment id='icon-row'>
            <Popup content='Select All'
               position='bottom center' 
               trigger={<Checkbox checked={selectAll} onClick={toggleCheckbox} data-testid='selectAllCheckbox'/>} 
               inverted
            />
            {checkboxSelected &&       
               <div id='icon-container'>
                  <Icon name='tag' size='large'/>
                  <Popup content='Delete'
                     position='bottom center' 
                     trigger={<Icon name='trash alternate' size='large' onClick={handleDelete} data-testid='trashIcon'/>} 
                     inverted
                  />
                  <Popup content='Move to Inbox'
                     position='bottom center' 
                     trigger={<Icon name='inbox' size='large' onClick={handleInbox}/>} 
                     inverted
                  />
               </div>}
         </Segment>
      </div>
   )
} 

const mapStatetoProps = state => {
   return ({
      messages: state.messages,
      selectAll: state.selectAll
   })
}

export default connect(mapStatetoProps, {selectAllMessages, deselectAllMessages, updateMessages})(IconBar)