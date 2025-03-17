import React, { useState, useEffect } from 'react'

function MountedExample() {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div style={{padding: 20}}>
            {show && <h1>Mounted Example</h1>}
            <button onClick={handleShow}>Show</button>
        </div>
    )
}

export default MountedExample