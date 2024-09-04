import { useTheme } from '@component/themeContext'
import React, { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { IModal } from './interfaces'
import { ToastWrapper } from './styles'

const portalRoot = document.createElement('div')
portalRoot.setAttribute('id', 'portal-root')
document.body.appendChild(portalRoot)

export const Toast: FC<IModal> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose!, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen, onClose])

  const { isLight } = useTheme()

  return createPortal(
    <ToastWrapper $isLight={isLight} $isOpen={isOpen}>
      {children}
    </ToastWrapper>,
    document.getElementById('portal-root') as HTMLElement,
  )
}
