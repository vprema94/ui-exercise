import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Checkbox, Icon, Popup } from 'semantic-ui-react';
import { selectAllMessages, deselectAllMessages, deleteMessages } from '../store/actions'
import '../stylesheets/iconBar.css';

const IconBar = ({ selectAll, messages, selectAllMessages, deselectAllMessages, deleteMessages }) => {

   const [checked, setChecked] = useState(false);

   const toggleCheckbox = () => {
      setChecked(!checked)
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
      deleteMessages(deletedMessages)
   } 

   const checkboxSelected = messages.some(message => (message.isSelected))

   return (
      <div>
         <Segment id='icon-row'>
            <Popup content='Select'
               position='bottom center' 
               trigger={<Checkbox checked={checked} onClick={toggleCheckbox}/>} 
               inverted
            />
            {checkboxSelected &&       
               <div id='icon-container'>
                  <Icon name='tag' size='large'/>
                  <Popup content='Delete'
                     position='bottom center' 
                     trigger={<Icon name='trash alternate' size='large' onClick={handleDelete}/>} 
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

export default connect(mapStatetoProps, {selectAllMessages, deselectAllMessages, deleteMessages})(IconBar)