import React, { useEffect } from 'react'
import qs from 'query-string'

type EmbedEnv = 'dev' | 'local' | 'production' | 'staging'

export interface DesignStudioProps {
  /** The shop id used to identify the shop's name. */
  shopId: string

  /** The product id used to identify the product for the customer to customize. */
  productId: string

  /** The sales channel id used to identify the react integration created in the sales channel. */
  salesChannelId?: string

  view?: 'cart' | 'login' | 'checkout'
  productDesignId?: string
  externalProductId?: string
  externalCartId?: string

  onAddToCart?: () => void
  onCheckout?: () => void

  style?: React.CSSProperties
  className?: string

  /** The root URL to use. Typically points to https://embed.brikl.com unless we're debugging in a different environment. */
  rootURL?: string
}

/**
 * Retrieves the source URL to render the design studio in an iframe.
 */
function getFrameSource(config: DesignStudioProps) {
  const frameURL = config.rootURL ?? 'https://embed.brikl.com'

  const queryOptions = {
    s: config.shopId,
    v: config.view,
    p: config.productId,
    sc: config.salesChannelId,
    ep: config.externalProductId,
    c: config.externalCartId,
    pd: config.productDesignId,
  }

  const queryString = qs.stringify(queryOptions)

  return frameURL + '?' + queryString
}

/**
 * The design studio component renders the BRIKL design studio,
 * where the customer can customize their own custom products.
 *
 * It is a thin wrapper which renders an iframe, similar to the BRIKL button.js library.
 */
export const DesignStudio: React.FC<DesignStudioProps> = props => {
  const frameStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    ...props.style,
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.addEventListener('message', e => {
      const message = JSON.parse(e.data)

      if (message.type === 'brikl-close') {
        // TODO: Close the iframe.
      }
    })
  }, [])

  return (
    <iframe
      style={frameStyle}
      className={props.className}
      src={getFrameSource(props)}
      title="BRIKL Design Studio"
    />
  )
}
