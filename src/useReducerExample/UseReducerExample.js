import React, { useActionState, useReducer, useState } from 'react'

// useState
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) =>{
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

function UseReducerExample() {
    // const [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div style={{padding: '10px 32px'}}>
            <h1>{count}</h1>
            <button
                // onClick={() => setCount(prev => prev - 1)}
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                // onClick={() => setCount(prev => prev + 1)}
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
            
        </div>
    )
}

export default UseReducerExample