const emailData = require('../emails.json').messages.map((message => 
  ({isSelected: false, isDeleted: false, ...message})
)); 

const initialState = { messages: emailData, selectAll: false, selectedTag: 'inbox' }

export default (state=initialState, action) => {

  switch (action.type) {

    case 'HANDLE_CHECKBOX':
      return {
        ...state, 
        messages: [...action.newMessages],
      }

    case 'SELECT_ALL_MESSAGES':
      return {
        ...state,
        messages: [...action.selectedMessages], selectAll: true
      } 

    case 'DESELECT_ALL_MESSAGES':
      return {
        ...state,
        messages: [...action.deselectedMessages], selectAll: false
      } 

    case 'FILTER_BY_TAG':
      return {
        ...state,
        selectedTag: action.selectedTag
      } 

    default:
      return initialState;
  }
}  