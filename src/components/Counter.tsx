import { useState, useCallback } from 'react'

interface Activity {
  type: 'increase' | 'decrease'
  time: string
}

interface CounterProps {
  initialCount?: number
}

export function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount)
  const [activities, setActivities] = useState<Activity[]>([])

  const getCurrentTime = useCallback(() => {
    const now = new Date()
    return now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
  }, [])

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1)
    setActivities((prev) => [
      { type: 'increase', time: getCurrentTime() },
      ...prev.slice(0, 1),
    ])
  }, [getCurrentTime])

  const handleDecrease = useCallback(() => {
    setCount((prev) => prev - 1)
    setActivities((prev) => [
      { type: 'decrease', time: getCurrentTime() },
      ...prev.slice(0, 1),
    ])
  }, [getCurrentTime])

  const handleReset = useCallback(() => {
    setCount(0)
    setActivities([])
  }, [])

  return (
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
  )
}
