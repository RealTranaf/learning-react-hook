import React, { useReducer } from 'react'

const initState = {
    job: '',
    jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const reducer = (state, action) => {
    console.log('Action: ', action)
    
    switch(action){
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:

        case DELETE_JOB: 

        default:
            throw new Error('Invalid')
    }
}

function ToDoReducer() {
    const [state, dispatch] = useReducer(reducer, initState)

    const {job, jobs} = state
    return (
        <div style={{padding: '10px 32px'}}>
            <input
                value={job}
                placeholder='Enter todo'
                onChange={e => dispatch(setJob(e.target.value))}
            >
            </input>
            <button>Add</button>
            <ul>
                {jobs.map((job, index) => {
                    <li key={index}>{job} &times;</li>
                })}
            </ul>
        </div>
    )
}

export default ToDoReducer