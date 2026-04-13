import { useState, useCallback } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [activities, setActivities] = useState<Array<{ type: 'increase' | 'decrease'; time: string }>>([])

  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
  }

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1)
    setActivities((prev) => [
      { type: 'increase', time: getCurrentTime() },
      ...prev.slice(0, 1),
    ])
  }, [])

  const handleDecrease = useCallback(() => {
    setCount((prev) => prev - 1)
    setActivities((prev) => [
      { type: 'decrease', time: getCurrentTime() },
      ...prev.slice(0, 1),
    ])
  }, [])

  const handleReset = useCallback(() => {
    setCount(0)
    setActivities([])
  }, [])

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full bg-[#131313] flex justify-between items-center px-6 h-16 z-50">
        <div className="font-extrabold tracking-tighter text-xl text-[#E5E2E1] tracking-[0.05em] uppercase">
          SAYAC
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full active:scale-95"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full active:scale-95"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="min-h-screen flex flex-col items-center justify-center pt-16 pb-32 px-6 overflow-hidden">
        {/* Kinetic Monolith Container */}
        <div className="relative w-full max-w-md flex flex-col items-center">
          {/* Contextual Decorative Gradient */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full"></div>

          {/* The Hero Counter */}
          <div className="relative z-10 flex flex-col items-center mb-16 select-none">
            <span className="text-on-tertiary-container/30 font-label text-[0.75rem] font-medium uppercase tracking-[0.2em] mb-4">
              Mevcut Sayaç
            </span>
            <div className="text-[8rem] md:text-[12rem] font-black leading-none tracking-[-0.04em] text-on-surface text-shadow-monolith">
              {count}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[0.75rem] text-tertiary-container uppercase tracking-widest font-medium">
                Canlı Oturum
              </span>
            </div>
          </div>

          {/* Kinetic Action Controls */}
          <div className="w-full space-y-6">
            {/* Artır Button (Primary) */}
            <button
              onClick={handleIncrease}
              className="group relative w-full h-24 bg-gradient-to-br from-primary-container to-primary rounded-xl overflow-hidden active:scale-[0.96] transition-all duration-200 flex items-center justify-center shadow-[0_20px_40px_rgba(16,185,129,0.15)] cursor-pointer"
              aria-label="Artır"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              <div className="relative flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-[2rem] text-on-primary"
                  style={{ fontVariationSettings: "'wght' 700" }}
                >
                  add
                </span>
                <span className="text-[1.375rem] font-medium uppercase tracking-[0.05em] text-on-primary">
                  Artır
                </span>
              </div>
            </button>

            <div className="grid grid-cols-2 gap-4">
              {/* Azalt Button (Secondary) */}
              <button
                onClick={handleDecrease}
                className="h-20 bg-secondary-container rounded-lg active:scale-[0.96] transition-all duration-200 flex items-center justify-center hover:brightness-110 cursor-pointer"
                aria-label="Azalt"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-secondary">remove</span>
                  <span className="text-[1.125rem] font-medium uppercase tracking-[0.05em] text-on-secondary">
                    Azalt
                  </span>
                </div>
              </button>

              {/* Sıfırla Button (Tertiary) */}
              <button
                onClick={handleReset}
                className="h-20 bg-surface-container-highest rounded-lg active:scale-[0.96] transition-all duration-200 flex items-center justify-center hover:bg-surface-container-high border border-outline-variant/10 cursor-pointer"
                aria-label="Sıfırla"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">restart_alt</span>
                  <span className="text-[1.125rem] font-medium uppercase tracking-[0.05em] text-tertiary">
                    Sıfırla
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Editorial Log Snippet (Bento-style Minimal Card) */}
          {activities.length > 0 && (
            <div className="w-full mt-12 p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-widest">
                  Son Aktivite
                </span>
                <span className="text-[0.7rem] text-tertiary-container">Bugün, {activities[0]?.time}</span>
              </div>
              <div className="space-y-4">
                {activities.slice(0, 2).map((activity, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-2 ${index > 0 ? 'border-t border-outline-variant/5' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'increase' ? 'bg-primary-container/20' : 'bg-secondary-container/20'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-sm ${
                            activity.type === 'increase' ? 'text-primary' : 'text-secondary'
                          }`}
                        >
                          {activity.type === 'increase' ? 'add' : 'remove'}
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {activity.type === 'increase' ? 'Sayaç Artırıldı' : 'Sayaç Azaltıldı'}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-bold ${
                        activity.type === 'increase' ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {activity.type === 'increase' ? '+1' : '-1'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-[#131313]/80 backdrop-blur-xl rounded-t-[3rem] shadow-[0px_-20px_40px_rgba(0,0,0,0.4)]">
        {/* Active Tab: Sayaç */}
        <a
          className="flex flex-col items-center justify-center bg-[#353534] text-[#10B981] rounded-full px-6 py-2 transition-opacity hover:opacity-100"
          href="#"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            counter_1
          </span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-0.5">Sayaç</span>
        </a>
        {/* Inactive Tab: Geçmiş */}
        <a
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity"
          href="#"
        >
          <span className="material-symbols-outlined">history</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Geçmiş</span>
        </a>
        {/* Inactive Tab: Ayarlar */}
        <a
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity"
          href="#"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Ayarlar</span>
        </a>
      </nav>
    </div>
  )
}

export default App
