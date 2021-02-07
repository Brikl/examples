import React from 'react'

import { DesignStudio } from '@brikl/react-brikl'

import './index.scss'

export const Fullscreen = () => {
  return (
    <div className="container">
      <DesignStudio
        style={{ height: '100vh' }}
        shopId="demo"
        productId="56bbcb76-c6ee-44ae-92d7-659fde38fa9b"
      />
    </div>
  )
}

export default Fullscreen
