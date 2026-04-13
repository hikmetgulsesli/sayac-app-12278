import { useState, useCallback } from 'react'
import { Counter } from './components/Counter'
import './index.css'

function App() {
  const [currentView, setCurrentView] = useState<'counter' | 'history' | 'settings'>('counter')

  const handleGoHome = useCallback(() => {
    setCurrentView('counter')
  }, [])

  const handleHistoryClick = useCallback(() => {
    setCurrentView('history')
  }, [])

  const handleSettingsClick = useCallback(() => {
    setCurrentView('settings')
  }, [])

  // Render content based on current view
  const renderContent = () => {
    switch (currentView) {
      case 'history':
        return (
          <div className="relative w-full max-w-md flex flex-col items-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center mb-12 select-none">
              <span className="material-symbols-outlined text-[6rem] text-tertiary-container mb-4">history</span>
              <h1 className="text-3xl font-black tracking-tight text-on-surface mb-2">Geçmiş</h1>
              <p className="text-tertiary-container text-center">Yakında burada sayaç geçmişinizi görebileceksiniz.</p>
            </div>

            <button
              onClick={handleGoHome}
              className="group relative px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-bold tracking-[0.05em] transition-all active:scale-[0.96] flex items-center justify-center gap-3 shadow-[0px_20px_40px_rgba(16,185,129,0.1)] cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Geri Dön
            </button>
          </div>
        )
      case 'settings':
        return (
          <div className="relative w-full max-w-md flex flex-col items-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center mb-12 select-none">
              <span className="material-symbols-outlined text-[6rem] text-tertiary-container mb-4">settings</span>
              <h1 className="text-3xl font-black tracking-tight text-on-surface mb-2">Ayarlar</h1>
              <p className="text-tertiary-container text-center">Uygulama ayarları yakında burada olacak.</p>
            </div>

            <button
              onClick={handleGoHome}
              className="group relative px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-bold tracking-[0.05em] transition-all active:scale-[0.96] flex items-center justify-center gap-3 shadow-[0px_20px_40px_rgba(16,185,129,0.1)] cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Geri Dön
            </button>
          </div>
        )
      default:
        return <Counter />
    }
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full bg-[#131313] flex justify-between items-center px-6 h-16 z-50">
        <div className="font-['Inter'] font-extrabold tracking-tighter text-xl font-black text-[#E5E2E1] tracking-[0.05em] uppercase">
          SAYAC
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleHistoryClick}
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full active:scale-95 cursor-pointer"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button
            onClick={handleSettingsClick}
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full active:scale-95 cursor-pointer"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center pt-16 pb-32 px-6 overflow-hidden">
        {renderContent()}
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-[#131313]/80 backdrop-blur-xl rounded-t-[3rem] shadow-[0px_-20px_40px_rgba(0,0,0,0.4)]">
        {/* Sayaç Tab */}
        <button
          onClick={handleGoHome}
          className={`flex flex-col items-center justify-center rounded-full px-6 py-2 transition-opacity hover:opacity-100 cursor-pointer ${
            currentView === 'counter' ? 'bg-[#353534] text-[#10B981]' : 'text-[#9CA3B2] opacity-60'
          }`}
        >
          <span 
            className="material-symbols-outlined"
            style={{ fontVariationSettings: currentView === 'counter' ? "'FILL' 1" : "'FILL' 0" }}
          >
            counter_1
          </span>
          <span className="font-['Inter'] text-[0.75rem] font-medium uppercase tracking-widest mt-0.5">Sayaç</span>
        </button>
        
        {/* Geçmiş Tab */}
        <button
          onClick={handleHistoryClick}
          className={`flex flex-col items-center justify-center transition-opacity hover:opacity-100 cursor-pointer ${
            currentView === 'history' ? 'text-[#10B981] opacity-100' : 'text-[#9CA3B2] opacity-60'
          }`}
        >
          <span className="material-symbols-outlined">history</span>
          <span className="font-['Inter'] text-[0.75rem] font-medium uppercase tracking-widest mt-1">Geçmiş</span>
        </button>
        
        {/* Ayarlar Tab */}
        <button
          onClick={handleSettingsClick}
          className={`flex flex-col items-center justify-center transition-opacity hover:opacity-100 cursor-pointer ${
            currentView === 'settings' ? 'text-[#10B981] opacity-100' : 'text-[#9CA3B2] opacity-60'
          }`}
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-['Inter'] text-[0.75rem] font-medium uppercase tracking-widest mt-1">Ayarlar</span>
        </button>
      </nav>
    </div>
  )
}

export default App
