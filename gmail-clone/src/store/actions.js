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

export const filterByTag = (selectedTag) => {
   return {
      type: 'FILTER_BY_TAG',
      selectedTag
   }
} 

export const updateMessages = (updatedMessages) => {
   return {
      type: 'UPDATE_MESSAGES',
      updatedMessages
   }
} 


