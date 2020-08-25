import React from 'react'

import { DesignStudio } from '@brikl/react-brikl'

import './index.scss'

export const Index = () => {
  return (
    <div className="app">
      <main className="main">
        <div className="container">
          <DesignStudio
            style={{ height: 600 }}
            shopId="demo"
            productId="56bbcb76-c6ee-44ae-92d7-659fde38fa9b"
            productDesignId="b5bbe2df-750b-4c15-a426-48c215fd3efa"
          />
        </div>
      </main>
    </div>
  )
}

export default Index
