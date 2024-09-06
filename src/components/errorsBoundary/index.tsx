import React, { Component, ErrorInfo } from 'react'
import { Navigate } from 'react-router-dom'

import { ErrorBoundaryProps, ErrorBoundaryState } from './interfaces'

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    alert('ErrorBoundary caught an error' + error + errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <Navigate to='/error' />
    }

    return this.props.children
  }
}
