import React, { useState, useMemo, useRef } from 'react'

function UseMemoExample() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    // const total = products.reduce((result, prod) => {
    //     return result + prod.price
    // }, 0)
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('Hmm')
            return result + prod.price
        }, 0)

        return result
    }, [products])
    return (
        <div style={{padding: '10px 32px'}}>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter name'
                onChange={e => setName(e.target.value)}
            >
            </input>
            <br></br>
            <input
                value={price}
                placeholder='Enter price'
                onChange={e => setPrice(e.target.value)}
            >
            </input>
            <br></br>
            <button onClick={handleSubmit}>Add</button>
            <br></br>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemoExample