const redux = require('redux');
//console.log('test case----->',redux);


// state
const initState = {
    num : 0,
}

// Reducer 
const rootReducer = (state=initState,action) =>{
    return state
}

// Store

const store = redux.createStore(rootReducer);  // store  accept a  Reducer function
//console.log(store);


// getState() function will show always current or updated state

console.log('Current State : ',store.getState());


