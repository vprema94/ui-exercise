import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Checkbox } from 'semantic-ui-react';
import { selectAllMessages } from '../store/actions'

const IconBar = ({ selectAllMessages }) => {

   const [checked, setChecked] = useState(false);

   const toggleCheckbox = () => {
      setChecked(!checked)
      selectAllMessages()
   }

   return (
      <div>
         <Container>
            <Checkbox checked={checked} onClick={toggleCheckbox}/>
         </Container>
      </div>
   )
} 

export default connect(null, {selectAllMessages})(IconBar)