import { useTheme } from '@component/themeContext'
import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { IModal } from './interfaces'
import { ToastWrapper } from './styles'

export const Toast: FC<IModal> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen, onClose])

  const { isLight } = useTheme()

  return ReactDOM.createPortal(
    <ToastWrapper $isLight={isLight} $isOpen={isOpen}>
      {children}
    </ToastWrapper>,
    document.getElementById('modal-root') as HTMLElement,
  )
}
