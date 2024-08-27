import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { ToastWrapper } from './style'

interface IModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  isLight: boolean
}

export const Toast: FC<IModal> = ({ isOpen, onClose, children, isLight }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen, onClose])

  return ReactDOM.createPortal(
    <ToastWrapper isOpen={isOpen} isLight={isLight}>
      {children}
    </ToastWrapper>,
    document.getElementById('modal-root') as HTMLElement,
  )
}
