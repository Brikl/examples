import React, { useState } from 'react'
import c from 'classnames'

import { DesignStudioProps } from '../studio/DesignStudio'

interface DesignButtonProps extends DesignStudioProps {
  label?: string
  studioClassName?: string
  studioStyle?: React.CSSProperties
}

export const DesignButton = (props: DesignButtonProps) => {
  const {
    label = 'Design Now',
    className,
    style,
    studioClassName,
    studioStyle,
    ...studioProps
  } = props

  const [] = useState(false)

  const buttonClassNames = c('brikl-button', className)

  return (
    <div>
      <button className={buttonClassNames}>{label}</button>
    </div>
  )
}
