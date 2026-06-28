import { useReducer } from "react";

function counter(state, action) {
    const {type} = action;
    console.log(type, state.count)
    switch(type) {
        case 'increment': 
         return {
            ...state, 
            count: state.count + 1
         }
         case 'decrement': 
         return {
            ...state, 
            count: state.count - 1
         }
         default: null
         
    }
}

function ReducerComponent() {
    // const [state, dispatch] = useReducer(reducer, inititalState, init);
    const [state, dispatch] = useReducer(counter, {count: 1})
    console.log(state)
    return(
        <div className="mt-4">
            {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
             <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </div>
    )
}

export default ReducerComponent;