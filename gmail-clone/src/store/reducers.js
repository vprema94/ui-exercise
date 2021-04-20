const emailData = require('../emails.json').messages

const initialState = emailData.map((message => 
  ({isSelected: false, ...message})
)); 

export default (state=initialState, action) => {

  switch (action.type) {

    case 'HANDLE_CHECKBOX':
      let newState = state
      const objIndex = newState.findIndex((obj => obj.id === action.emailId));
      newState[objIndex].isSelected = true
      return newState

    default:
      return initialState;
  }
}  