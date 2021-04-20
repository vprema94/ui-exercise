import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Checkbox, Icon } from 'semantic-ui-react';
import { selectAllMessages, deselectAllMessages } from '../store/actions'
import '../stylesheets/iconBar.css';

const IconBar = ({ selectAll, messages, selectAllMessages, deselectAllMessages }) => {

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

   const checkboxSelected = messages.some(message => (message.isSelected))

   return (
      <div>
         <Container id='icon-container'>
            <Checkbox checked={checked} onClick={toggleCheckbox}/>
            {checkboxSelected &&       
               <div>
                  <Icon name='tag'/>
                  <Icon name='trash alternate'/>
               </div>}
         </Container>
      </div>
   )
} 

const mapStatetoProps = state => {
   return ({
      messages: state.messages,
      selectAll: state.selectAll
   })
}

export default connect(mapStatetoProps, {selectAllMessages, deselectAllMessages})(IconBar)