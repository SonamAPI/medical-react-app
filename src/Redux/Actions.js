export function increment() {
   console.log('====================================');
   console.log('increment action');
   console.log('====================================');
    return {
       type: 'INCREMENT'
    }
 }
 export function decrement() {
   console.log('====================================');
   console.log('decrement action');
   console.log('====================================');
    return {
       type: 'DECREMENT'
    }
 }
 export function reset() {

   console.log('====================================');
   console.log('reset  action');
   console.log('====================================');
    return { type: 'RESET' }
 }