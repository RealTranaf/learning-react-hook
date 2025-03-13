import React, {useState, useEffect} from 'react'

function ResizeWindow() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize')
        }
    }, [])

    return (
        <div>
            <h1>{width}</h1>
            <h1>{height}</h1>
        </div>
    )
}

export default ResizeWindow