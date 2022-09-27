const reducer =  (state = 10, action)=>  {
   console.log('====================================');
   console.log(state);
   console.log('====================================');
    switch (action.type) {
       case 'INCREMENT': return state + 1;
       case 'DECREMENT': return state - 1;
       case 'RESET' : return 0 ;
       default: return state;
    }
 }
 export default reducer;
 