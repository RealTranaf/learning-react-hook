import React, { useState } from 'react'
import DummyFile from './DummyFile'
// 1. memo() -> Higher Order Component (HOC)
// 2. useCallBack()

function Memo() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <DummyFile count={count}></DummyFile>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default Memo