import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Checkbox } from 'semantic-ui-react';
import { selectAllMessages, deselectAllMessages } from '../store/actions'

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

   return (
      <div>
         <Container>
            <Checkbox checked={checked} onClick={toggleCheckbox}/>
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