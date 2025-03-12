import React, { useEffect, useState } from 'react'

function UpdateDom() {
    const [title, setTitle] = useState('')

    useEffect(() => {
        // console.log("Re-render", title)
        document.title = title
    })

    const handleInput = (e) => {
        setTitle(e.target.value)
        // console.log(title)
    }
    return (
        <div style={{ padding: 20 }}>
            <input
                value={title}
                onChange={handleInput}
            >
            </input>
        </div>
    )
}

export default UpdateDom