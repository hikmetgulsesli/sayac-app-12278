import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './index.css'

// Error Page Component - Hata Sayfası
function ErrorPage() {
  const navigate = useNavigate()

  const handleRetry = useCallback(() => {
    window.location.reload()
  }, [])

  const handleGoHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 z-50">
        <div className="font-extrabold tracking-tighter text-xl text-[#E5E2E1] tracking-[0.05em] uppercase">
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
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-[8rem] text-secondary-container">running_with_errors</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Tonal Stacking Typography */}
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface leading-tight">
              Bir Şeyler <span className="text-secondary-container">Yanlış Gitti</span>
            </h1>
            <p className="text-tertiary-container text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
              Lütfen sayfayı yenilemeyi deneyin veya daha sonra tekrar gelin.
            </p>
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

      {/* Subtle Ambient Visual Detail */}
      <div className="fixed bottom-12 left-12 hidden lg:block opacity-20 pointer-events-none">
        <div className="flex flex-col gap-1 border-l border-outline-variant/30 pl-4">
          <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-outline">System_Status</span>
          <span className="text-xs font-mono text-secondary-container">ERROR_CORE_ASYNC_FAILURE</span>
        </div>
      </div>
    </div>
  )
}

// 404 Page Component - 404 Sayfası
function NotFoundPage() {
  const navigate = useNavigate()

  const handleGoHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 w-full max-w-none bg-[#131313] z-50">
        <div className="text-xl font-black text-[#E5E2E1] tracking-[0.05em] uppercase font-extrabold tracking-tighter">
          SAYAC
        </div>
        <div className="flex gap-4">
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-surface">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #10B981 0%, transparent 60%)' }}
        ></div>

        <div className="relative z-10 flex flex-col items-center max-w-lg w-full text-center">
          <div className="mb-8 select-none">
            <h1 className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-[#353534] text-glow">
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
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-[#131313]/80 backdrop-blur-xl rounded-t-[3rem] shadow-[0px_-20px_40px_rgba(0,0,0,0.4)]">
        <Link
          to="/"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">counter_1</span>
          <span className="font-['Inter'] text-[0.75rem] font-medium uppercase tracking-widest mt-1">Sayaç</span>
        </Link>
        <Link
          to="/history"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">history</span>
          <span className="font-['Inter'] text-[0.75rem] font-medium uppercase tracking-widest mt-1">Geçmiş</span>
        </Link>
        <Link
          to="/settings"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">settings</span>
          <span className="font-['Inter'] text-[0.75rem] font-medium uppercase tracking-widest mt-1">Ayarlar</span>
        </Link>
      </footer>
    </div>
  )
}

// History Page (placeholder for navigation)
function HistoryPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body flex flex-col">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
        <div className="font-extrabold tracking-tighter text-xl text-[#E5E2E1] tracking-[0.05em] uppercase">
          SAYAC
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center pt-16 pb-32 px-6">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-6xl text-tertiary-container">history</span>
          <h1 className="text-2xl font-bold text-on-surface">Geçmiş</h1>
          <p className="text-tertiary-container">Yakında burada geçmiş aktivitelerinizi görebileceksiniz.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-3 bg-primary-container text-on-primary rounded-xl font-medium cursor-pointer"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-[#131313]/80 backdrop-blur-xl rounded-t-[3rem] shadow-[0px_-20px_40px_rgba(0,0,0,0.4)]">
        <Link
          to="/"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">counter_1</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Sayaç</span>
        </Link>
        <Link
          to="/history"
          className="flex flex-col items-center justify-center bg-[#353534] text-[#10B981] rounded-full px-6 py-2"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-0.5">Geçmiş</span>
        </Link>
        <Link
          to="/settings"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">settings</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Ayarlar</span>
        </Link>
      </footer>
    </div>
  )
}

// Settings Page (placeholder for navigation)
function SettingsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body flex flex-col">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
        <div className="font-extrabold tracking-tighter text-xl text-[#E5E2E1] tracking-[0.05em] uppercase">
          SAYAC
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </button>
          <button
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full cursor-pointer"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center pt-16 pb-32 px-6">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-6xl text-tertiary-container">settings</span>
          <h1 className="text-2xl font-bold text-on-surface">Ayarlar</h1>
          <p className="text-tertiary-container">Yakında burada uygulama ayarlarını yapabileceksiniz.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-3 bg-primary-container text-on-primary rounded-xl font-medium cursor-pointer"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-[#131313]/80 backdrop-blur-xl rounded-t-[3rem] shadow-[0px_-20px_40px_rgba(0,0,0,0.4)]">
        <Link
          to="/"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">counter_1</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Sayaç</span>
        </Link>
        <Link
          to="/history"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <span className="material-symbols-outlined group-active:scale-90 transition-transform">history</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Geçmiş</span>
        </Link>
        <Link
          to="/settings"
          className="flex flex-col items-center justify-center bg-[#353534] text-[#10B981] rounded-full px-6 py-2"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-0.5">Ayarlar</span>
        </Link>
      </footer>
    </div>
  )
}

// Counter Page (main app)
function CounterPage() {
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
          <Link
            to="/history"
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full active:scale-95 cursor-pointer"
            aria-label="Geçmiş"
          >
            <span className="material-symbols-outlined">history</span>
          </Link>
          <Link
            to="/settings"
            className="text-[#9CA3B2] hover:bg-[#353534] transition-colors p-2 rounded-full active:scale-95 cursor-pointer"
            aria-label="Ayarlar"
          >
            <span className="material-symbols-outlined">settings</span>
          </Link>
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
        <Link
          to="/"
          className="flex flex-col items-center justify-center bg-[#353534] text-[#10B981] rounded-full px-6 py-2 transition-opacity hover:opacity-100"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            counter_1
          </span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-0.5">Sayaç</span>
        </Link>
        {/* Inactive Tab: Geçmiş */}
        <Link
          to="/history"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="material-symbols-outlined">history</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Geçmiş</span>
        </Link>
        {/* Inactive Tab: Ayarlar */}
        <Link
          to="/settings"
          className="flex flex-col items-center justify-center text-[#9CA3B2] opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[0.75rem] font-medium uppercase tracking-widest mt-1">Ayarlar</span>
        </Link>
      </nav>
    </div>
  )
}

// Main App with Router
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
