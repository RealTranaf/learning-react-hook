import React, { useEffect, useLayoutEffect, useState } from 'react'

function UseLayoutEffectExample() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if (count > 3){
    //         setCount(0)
    //     }
    // }, [count])
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={handleRun}
            >
                Click me!
            </button>
        </div>
    )
}

export default UseLayoutEffectExample