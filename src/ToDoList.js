import React, { useState } from 'react'

function ToDoList() {

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs ?? []
    })

    const handleInput = (input) => {
        setJob(prevState => input);
    }
    const handleSubmit = () => {
        setJobs(prevState => {
            const newJobs = [...prevState, job]
            // Luu vao localStorage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        });
        setJob('')

        // console.log(jobs)
        // Đoạn này sẽ luôn chậm hơn một bước do lệnh set ở đây chỉ là lên lịch trình, phải đến khi re-render lại thì mới cập nhật vào mảng
    }

    const clearList = () => {
        localStorage.removeItem('jobs')
        setJobs(prevState => [])
    }
    // console.log(job);
    // console.log(jobs)
    return (
        <div style={{padding: 40}}>
            <input 
                value={job} 
                onChange={e => handleInput(e.target.value)}>
            </input>

            <button onClick={handleSubmit}>
                Add
            </button>
            <button onClick={clearList}>
                Clear list
            </button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>

        </div>
    )
}

export default ToDoList