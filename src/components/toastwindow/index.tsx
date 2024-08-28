import { useTheme } from '@component/themecontext'
import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { ToastWrapper } from './styles'

interface IModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Toast: FC<IModal> = ({ isOpen, onClose, children }) => {
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
    <ToastWrapper $isOpen={isOpen} $isLight={isLight}>
      {children}
    </ToastWrapper>,
    document.getElementById('modal-root') as HTMLElement,
  )
}
