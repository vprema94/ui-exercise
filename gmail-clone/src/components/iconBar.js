import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Checkbox } from 'semantic-ui-react';
import { selectAllMessages, deselectAllMessages } from '../store/actions'

const IconBar = ({ selectAll, selectAllMessages, deselectAllMessages }) => {

   const [checked, setChecked] = useState(false);

   const toggleCheckbox = () => {
      setChecked(!checked)
      if (selectAll) {
         deselectAllMessages()
      } else {
         selectAllMessages()
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
     selectAll: state.selectAll
   })
}

export default connect(mapStatetoProps, {selectAllMessages, deselectAllMessages})(IconBar)