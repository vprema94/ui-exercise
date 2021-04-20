export const handleCheckbox = (emailId) => {
   return {
      type: 'HANDLE_CHECKBOX',
      emailId
   }
} 

export const selectAllMessages = () => {
   return {
      type: 'SELECT_ALL_MESSAGES',
   }
} 

export const deselectAllMessages = () => {
   return {
      type: 'DESELECT_ALL_MESSAGES',
   }
} 
