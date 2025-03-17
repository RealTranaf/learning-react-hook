import React, { memo } from 'react'

function DummyFile({count, onIncrease}) {
    return (
      <div>
        <div>DummyFile + {count}</div>
        <button onClick={onIncrease}>Click me!</button>
      </div>
      
    )
}

export default memo(DummyFile)