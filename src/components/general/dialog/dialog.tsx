import { useClickOutside } from 'hooks'
import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { setDialogOpen } from 'store/slices'
import { pxToRem } from 'utils'
import { PaperProps } from '../paper'
import { Typography } from '../typography'

import { StyledDialogBox, StyledOverlay } from './styles'

export interface DialogProps extends PaperProps {
  disableBackdropClick?: boolean
  alignItems?: 'center' | 'flex-start' | 'flex-end'
  width?: string
}

export const Dialog: React.FC<DialogProps> = ({
  width = '30vw',
  disableBackdropClick,
  alignItems,
  customStyles,
  children,
}) => {
  const { isOpen, info } = useAppSelector(state => state.dialogState)
  const dispatch = useAppDispatch()

  const innerRef = useRef<HTMLDivElement>(null)
  useClickOutside(innerRef, () => {
    !disableBackdropClick ? isOpen && dispatch(setDialogOpen(false)) : undefined
  })

  return (
    <StyledOverlay isOpen={isOpen} fullScreen>
      <StyledDialogBox
        ref={disableBackdropClick ? null : innerRef}
        width={width}
        alignItems={alignItems}
        customStyles={customStyles}
      >
        <Typography variant="heading" size="h2">
          {info.title}
        </Typography>
        <Typography variant="body" size="lead" gutterBottom={pxToRem(32)}>
          {info.subtitle}
        </Typography>
        {children}
      </StyledDialogBox>
    </StyledOverlay>
  )
}

export default Dialog
