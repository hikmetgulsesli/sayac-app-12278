import type { ReactNode } from 'react'

interface ErrorPageProps {
  error?: Error | null
  onRetry?: () => void
  onGoHome?: () => void
  title?: string
  message?: string
}

export function ErrorPage({
  error,
  onRetry,
  onGoHome,
  title = 'Bir Şeyler Yanlış Gitti',
  message = 'Lütfen sayfayı yenilemeyi deneyin veya daha sonra tekrar gelin.',
}: ErrorPageProps): ReactNode {
  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome()
    } else {
      window.location.href = '/'
    }
  }

  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-hidden flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 z-50">
        <div className="font-extrabold tracking-tighter text-xl text-on-surface tracking-[0.05em] uppercase">
          SAYAC
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center relative p-6">
        {/* Background Monolith Aesthetic */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-container opacity-10 blur-[160px] rounded-full"></div>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-container opacity-5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-xl w-full text-center space-y-12">
          {/* Asymmetric Kinetic Monolith: Error State */}
          <div className="relative inline-block">
            <div className="text-[12rem] md:text-[16rem] font-black tracking-tighter text-surface-container-highest opacity-20 select-none leading-none">
              500
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-[8rem] text-secondary-container">
                running_with_errors
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Tonal Stacking Typography */}
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface leading-tight">
              {title.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-secondary-container">
                {title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            <p className="text-tertiary-container text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
              {message}
            </p>
            {error && (
              <p className="text-tertiary-container/60 text-sm font-mono max-w-md mx-auto">
                {error.message}
              </p>
            )}
          </div>

          {/* Kinetic Action Buttons */}
          <div className="flex flex-col items-center gap-6 pt-8">
            <button
              onClick={handleGoHome}
              className="group relative w-full md:w-auto px-12 py-6 bg-primary-container text-on-primary-container rounded-xl font-black text-xl tracking-[0.05em] transition-all active:scale-[0.96] flex items-center justify-center gap-3 shadow-[0px_20px_40px_rgba(16,185,129,0.1)] cursor-pointer"
            >
              <span className="material-symbols-outlined">home</span>
              Ana Sayfaya Dön
            </button>
            <button
              onClick={handleRetry}
              className="text-tertiary hover:text-on-surface transition-colors font-medium flex items-center gap-2 px-8 py-3 rounded-full hover:bg-surface-container-high cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">refresh</span>
              <span>Tekrar Dene</span>
            </button>
          </div>
        </div>
      </main>

      {/* Subtle Ambient Visual Detail (Editorial Canvas) */}
      <div className="fixed bottom-12 left-12 hidden lg:block opacity-20 pointer-events-none">
        <div className="flex flex-col gap-1 border-l border-outline-variant/30 pl-4">
          <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-outline">
            System_Status
          </span>
          <span className="text-xs font-mono text-secondary-container">
            ERROR_CORE_ASYNC_FAILURE
          </span>
        </div>
      </div>
    </div>
  )
}
