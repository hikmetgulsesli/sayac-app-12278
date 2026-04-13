import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null })
    window.location.reload()
  }

  handleGoHome = () => {
    this.setState({ hasError: false, error: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Bir Hata Oluştu</h1>
            <p className="text-gray-600 mb-6">
              {this.state.error?.message || 'Bilinmeyen bir hata oluştu.'}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Tekrar Dene
              </button>
              <button
                onClick={this.handleGoHome}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Ana Sayfa
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
