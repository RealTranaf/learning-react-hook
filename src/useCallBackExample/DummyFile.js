import React, { memo } from 'react'

function DummyFile({count}) {
  return (
    <div>DummyFile + {count}</div>
  )
}

export default memo(DummyFile)