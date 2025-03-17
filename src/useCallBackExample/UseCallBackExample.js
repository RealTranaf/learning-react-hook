import React, { useCallback, useState } from 'react'
import DummyFile from './DummyFile'

function UseCallBackExample() {
    const [count, setCount] = useState(0)

    // const handleIncrease = () => {
    //     setCount(prev => prev + 1)
    // }

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div style={{padding: '10px 32px'}}>
            <DummyFile count={count} onIncrease={handleIncrease}></DummyFile>
            <h1>{count}</h1>
        </div>
    )
}

export default UseCallBackExample