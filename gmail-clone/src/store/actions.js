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
