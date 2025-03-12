import React, { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

function CallAPI() {
    // const [title, setTitle] = useState('') 

    const [data, setData] = useState([])
    const [type, setType] = useState('posts')

    console.log(type)
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setData(posts)
    //         })
    // })

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setData(posts)
    //         })
    // }, [])

    useEffect(() => {

        // console.log('Type changed!')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [type])

    // const handleInput = (e) => {
    //     setTitle(e.target.value)
    //     // console.log(title)
    // }

    return (
        <div style={{ padding: 20 }}>
            {/* <input
                value={title}
                onChange={handleInput}
            >
            </input> */}
            {tabs.map(tab => (
                <button 
                    onClick={() => setType(tab)} 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}} >
                    {tab}
                </button>
            ))}
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.body || item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default CallAPI