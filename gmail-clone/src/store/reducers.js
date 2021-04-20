let initialRenderState = require('../emails.json').messages

export default (state = initialRenderState, action) => {

   switch (action.type) {

     case 'EXAMPLE':
       return [...state]

     default:
       return initialRenderState;
   }
} 