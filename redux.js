const redux = require('redux');
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE';

// Action
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'To buy a cake'
    }
}

// State
let initialState = {
    count: 10
}

//Reducer
const reducer = (state =  initialState, action) => {
    switch(action.type){
        case 'BUY_CAKE': return {
                            ...state,
                            count: state.count - 1
                        }
        default: return state
    }
}

// store
const store = createStore(reducer);
console.log('Initial State ', store.getState());
store.subscribe(()=> console.log('updated state ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
//console.log('Updated State ', store.getState());




