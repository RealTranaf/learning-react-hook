import React, { useEffect, useState } from 'react'

function Timer() {
    const [countDown, setCountdown] = useState(180)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => prev - 1) 
        }, 1000)
        
        return () => clearInterval(timer)
    }, [])
    console.log(countDown)   
    return (
        <div>
            {countDown}
        </div>
    )
}

export default Timer