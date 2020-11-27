const redux = require("redux");
//console.log('test case----->',redux);




// state
const initState = {
  num: 0,
};




// Reducer
const rootReducer = (state = initState, action) => {
  if (action.type === "INC_NUM") {
    //console.log({...initState});

    return {
      ...state,            // using spread operator for creating a state copy to updateing state.
      num: state.num + 1,
    };
  } 
  else if (action.type==="DEC_NUM"){
      return{
          ...state,
          num : state.num - 1
      }

  }
  else if (action.type === "ADD_NUM") {
    return {
      ...state,
      num: state.num + action.value,
    };
  }
  return state;
};



// Store
// Creating a Store below :
const store = redux.createStore(rootReducer); // store  accept a  Reducer function
//console.log(store);





// subscribe() will execute automatically for performing every action
store.subscribe(()=>{     //subscribe function will accept a another function as a parameter.
    console.log("Comming result from subscribe func()--->",store.getState());
})





// getState() function will show always current or updated state
//console.log("Current State : ", store.getState())






// Dispatching Action :     dispatch() function will send "action" to root for performing something.

  
store.dispatch({
  type: "INC_NUM",    // dispatch() function accept a object and that's object must have a type property.
});

store.dispatch({
    type: "ADD_NUM",
    value: 34,
  });


store.dispatch({
    type: "DEC_NUM",
  });







