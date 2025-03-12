import React, { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']
function ListenDomEvent() {

    const [data, setData] = useState([])
    const [type, setType] = useState('posts')
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
        }, [type])
    useEffect(() => {

    }, [])

    return (
        <div style={{ padding: 20 }}>
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

export default ListenDomEvent