import React, { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']
function ListenDomEvent() {

    const [data, setData] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
        }, [type])
    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY)
            window.scrollY >= 200 ? setShowGoToTop(true): setShowGoToTop(false)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
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
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        left: 20,
                        bottom: 20
                    }}>
                    Go to top
                </button>
            )}
        </div>
    )
}

export default ListenDomEvent