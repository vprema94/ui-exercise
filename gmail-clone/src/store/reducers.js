const emailData = require('../emails.json').messages

const initialRenderState = emailData.map((message => 
  ({isSelected: true, ...message})
)); 

console.log('HELLO', initialRenderState)

export default (state = initialRenderState, action) => {

   switch (action.type) {

     case 'EXAMPLE':
       return [...state]

     default:
       return initialRenderState;
   }
} 