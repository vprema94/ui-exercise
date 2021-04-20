const emailData = require('../emails.json').messages.map((message => 
  ({isSelected: false, ...message})
)); 

const initialState = { messages: emailData, selectAll: false }

export default (state=initialState, action) => {

  switch (action.type) {

    case 'HANDLE_CHECKBOX':
      let newMessages = state.messages
      const objIndex = newMessages.findIndex((message => message.id === action.emailId));
      newMessages[objIndex].isSelected = !newMessages[objIndex].isSelected
      return {
        ...state, 
        messages: [...newMessages],
      }

    case 'SELECT_ALL_MESSAGES':
      let selectedMessages = state.messages.map((message) => {
        return {...message, isSelected: true}
      })
      return {
        messages: selectedMessages, selectAll: true
      } 

    case 'DESELECT_ALL_MESSAGES':
      let deselectedMessages = state.messages.map((message) => {
        return {...message, isSelected: false}
      })
      return {
        messages: deselectedMessages, selectAll: false
      } 

    default:
      return initialState;
  }
}  