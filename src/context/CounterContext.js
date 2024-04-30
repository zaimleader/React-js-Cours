import React, { createContext, useReducer } from "react";

const CounterContext = createContext({
    data : {count: 10, disabled: false},
    handleCountUp : ()=>{},
    handleCountDown : ()=>{},
    handleToggleDisable : ()=>{},
});

const reduceFn = (state, action)=>{
    switch(action.type){
        case "COUNT_UP":
            return {
                ...state, count: state.count + action.payload
            };
        case "COUNT_Down":
            return {
                ...state, count: state.count - action.payload
            };
        case "TOGGLE_DISABLE":
            return {
                ...state, disabled: !state.disabled
            };
        default:
            return state
    }
}

export const CounterState = (props)=>{
    const [data, dispatch] = useReducer(reduceFn, {
        count: 2,
        disabled: false
    });

    const {count, disabled} = data;

    const handleCountUp = (val)=>{
        dispatch({
            type: "COUNT_UP",
            payload: val
        })
    }
    
    const handleCountDown = (val)=>{
        dispatch({
            type: "COUNT_Down",
            payload: val
        })
    }

    const handleToggleDisable = ()=>{
        dispatch({
            type: "TOGGLE_DISABLE"
        })
    }

    return (
        <CounterContext.Provider value={{
            data,
            handleCountUp,
            handleCountDown,
            handleToggleDisable
        }}>
            {props.children}
        </CounterContext.Provider>
      )
}

export default CounterContext