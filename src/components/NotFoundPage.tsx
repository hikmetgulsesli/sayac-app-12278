import type { ReactNode } from 'react'

interface NotFoundPageProps {
  onGoHome?: () => void
  onHistory?: () => void
  onSettings?: () => void
}

export function NotFoundPage({ onGoHome, onHistory, onSettings }: NotFoundPageProps): ReactNode {
  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome()
    }
  }

  const handleHistoryClick = () => {
    if (onHistory) {
      onHistory()
    }
  }

  const handleSettingsClick = () => {
    if (onSettings) {
      onSettings()
    }
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 z-50 bg-surface">
        <div className="text-xl font-black text-on-surface tracking-[0.05em] uppercase">
          SAYAC
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleHistoryClick}
            className="text-tertiary-container hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button
            onClick={handleSettingsClick}
            className="text-tertiary-container hover:bg-surface-container-high transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-surface">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #10B981 0%, transparent 60%)',
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center max-w-lg w-full text-center">
          <div className="mb-8 select-none">
            <h1 className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-surface-container-highest text-glow">
              404
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
              Sayfa Bulunamadı
            </h2>
            <p className="text-tertiary-container text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
          </div>

          <div className="mt-12 w-full">
            <button
              onClick={handleGoHome}
              className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-5 bg-primary-container text-on-primary font-bold text-lg rounded-xl hover:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">Ana Sayfaya Dön</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-container to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 opacity-40">
            <div className="h-[1px] w-12 bg-outline-variant"></div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-sm">error</span>
              <span className="material-symbols-outlined text-sm">dangerous</span>
              <span className="material-symbols-outlined text-sm">query_stats</span>
            </div>
            <div className="h-[1px] w-12 bg-outline-variant"></div>
          </div>
        </div>

        <div className="absolute bottom-24 right-[-5%] w-64 h-64 bg-secondary-container/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-24 left-[-5%] w-96 h-96 bg-primary-container/5 blur-[150px] rounded-full pointer-events-none"></div>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-surface/80 backdrop-blur-xl rounded-t-[3rem] shadow-[0px_-20px_40px_rgba(0,0,0,0.4)]">
        <button
          type="button"
          onClick={handleGoHome}
          aria-label="Sayaç"
          className="flex flex-col items-center justify-center text-tertiary-container opacity-60 hover:opacity-100 transition-opacity cursor-pointer group bg-transparent border-0 p-0"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">
            counter_1
          </span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Sayaç</span>
        </button>
        <button
          type="button"
          onClick={handleHistoryClick}
          aria-label="Geçmiş"
          className="flex flex-col items-center justify-center text-tertiary-container opacity-60 hover:opacity-100 transition-opacity cursor-pointer group bg-transparent border-0 p-0"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">
            history
          </span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Geçmiş</span>
        </button>
        <button
          type="button"
          onClick={handleSettingsClick}
          aria-label="Ayarlar"
          className="flex flex-col items-center justify-center text-tertiary-container opacity-60 hover:opacity-100 transition-opacity cursor-pointer group bg-transparent border-0 p-0"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">
            settings
          </span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Ayarlar</span>
        </button>
      </footer>
    </div>
  )
}