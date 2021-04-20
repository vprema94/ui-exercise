export const handleCheckbox = (newMessages) => {
   return {
      type: 'HANDLE_CHECKBOX',
      newMessages
   }
} 

export const selectAllMessages = (selectedMessages) => {
   return {
      type: 'SELECT_ALL_MESSAGES',
      selectedMessages
   }
} 

export const deselectAllMessages = (deselectedMessages) => {
   return {
      type: 'DESELECT_ALL_MESSAGES',
      deselectedMessages
   }
} 

export const filterByTag = (filteredMessages) => {
   return {
      type: 'FILTER_BY_TAG',
      filteredMessages
   }
} 


