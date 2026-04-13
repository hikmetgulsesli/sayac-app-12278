# PRD: Sayac App (sayac-app-12278)

## 1. Proje Genel Bakışı

- **Proje Adı:** Sayac App
- **Proje Türü:** Basit sayaç (counter) web uygulaması
- **Çalışma Özeti:** Kullanıcının bir sayıyı artırıp azaltabildiği ve sıfırlayabildiği minimalist tek ekranlı bir uygulama.
- **Hedef Kullanıcılar:** Herhangi bir yaş grubundan günlük kullanıcılar.

## 2. Hedef Platform

- **Platform:** Web (tarayıcı)
- **Responsive:** Mobil ve masaüstü uyumlu
- **Progressive Web App (PWA):** Hayır

## 3. Fonksiyonel Gereksinimler

### 3.1 Temel Özellikler

1. **Sayıyı Artırma (+1)**
   - "Artır" butonuna tıklayarak sayaç değeri +1 artar.
   - Her artırma işleminde sayı anında güncellenir.

2. **Sayıyı Azaltma (-1)**
   - "Azalt" butonuna tıklayarak sayaç değeri -1 azalır.
   - Sayaç negatif değer alabilir (alt sınır yok).

3. **Sayıyı Sıfırlama**
   - "Sıfırla" butonuna tıklayarak sayaç değeri 0'a döner.

4. **Sayı Görüntüleme**
   - Sayaç değeri ekranda büyük ve okunaklı şekilde gösterilir.
   - Başlangıç değeri: 0

### 3.2 Kullanıcı Etkileşimleri

- Butonlar dokunmatik (touch) ve fare tıklaması ile çalışır.
- Butonlara klavyeden erişilebilir (Enter/Space ile).
- Sayaç değeri değiştiğinde görsel bir animasyon yok (minimalist).

### 3.3 Edge Case'ler

- **Alt sınır:** Negatif sayılara izin verilir.
- **Üst sınır:** Belirli bir üst sınır yok (JavaScript Number sınırları içinde).
- **Hata durumu:** Beklenmeyen hatalarda uygulama crash olmaz, hata ekranı gösterir.

## 4. Teknik Gereksinimler

### 4.1 Teknoloji Stack'i

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Programlama Dili:** TypeScript
- **State Yönetimi:** React useState (yerel state, harici kütüphane gerekmez)

### 4.2 Proje Yapısı

```
sayac-app-12278/
├── src/
│   ├── App.tsx              # Ana uygulama bileşeni
│   ├── main.tsx             # React DOM render
│   ├── index.css            # Tailwind directives
│   └── components/
│       └── Counter.tsx      # Sayaç bileşeni
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### 4.3 Bağımlılıklar

- react ^18.x
- react-dom ^18.x
- typescript ^5.x
- vite ^5.x
- tailwindcss ^3.x
- postcss ^8.x
- autoprefixer ^10.x

## 5. UI/UX Gereksinimleri

### 5.1 Sayfa Düzeni

- **Tek ekran tasarımı:** Tüm içerik tek sayfada gösterilir.
- **Dikey düzen:** Sayı üstte, butonlar altta.
- **Centered layout:** İçerik sayfanın ortasında hizalanmıştır.
- **Tam ekran yükseklik:** Sayı ve butonlar dikeyde ortalanmış.

### 5.2 Görsel Tasarım

- **Renk Paleti:**
  - Arka plan: Beyaz (#FFFFFF)
  - Sayı metni: Koyu gri/siyah (#1F2937)
  - Artır butonu: Yeşil (#10B981)
  - Azalt butonu: Kırmızı (#EF4444)
  - Sıfırla butonu: Gri (#6B7280)

- **Tipografi:**
  - Sayı: Büyük font (8rem veya 120px+), bold, monospace veya sans-serif
  - Butonlar: Orta boyut, bold metin

- **Butonlar:**
  - Yuvarlak köşeli (rounded-lg veya rounded-xl)
  - Butonlar arasında eşit boşluk
  - Mobilde: Tam genişlik, dikey stack
  - Masaüstünde: Yatay düzen, yan yana

### 5.3 Bileşen Detayları

#### Sayı Gösterimi
- Font boyutu: 8rem (128px)
- Font ağırlığı: 800 (extra bold)
- Renk: #1F2937 (gray-800)
- Sayı ortalanmış ve büyük

#### Artır Butonu
- Arka plan: #10B981 (green-500)
- Hover: #059669 (green-600)
- Aktif: #047857 (green-700)
- Metin: "Arttır" veya "+" simgesi
- Yuvarlak köşeli

#### Azalt Butonu
- Arka plan: #EF4444 (red-500)
- Hover: #DC2626 (red-600)
- Aktif: #B91C1C (red-700)
- Metin: "Azalt" veya "−" simgesi
- Yuvarlak köşeli

#### Sıfırla Butonu
- Arka plan: #6B7280 (gray-500)
- Hover: #4B5563 (gray-600)
- Aktif: #374151 (gray-700)
- Metin: "Sıfırla"
- Yuvarlak köşeli

## 6. Non-Functional Gereksinimler

### 6.1 Performans

- İlk yükleme süresi: < 1 saniye (Vite + React hızlı bundle)
- Buton tıklama yanıtı: Anlık (local state)
- Lighthouse performans skoru: 90+

### 6.2 Erişilebilirlik (Accessibility)

- Tüm butonlar klavyeden erişilebilir (tabindex, focus)
- Ekran okuyucu uyumlu (aria-label)
- Renk körlüğü olan kullanıcılar için yeterli kontrast
- WCAG 2.1 AA uyumu hedeflenir

### 6.3 Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## 7. Olası Gelecek Özellikler (Kapsam Dışı)

- Sayacın kalıcı olarak saklanması (localStorage veya veritabanı)
- Birden fazla sayaç desteği
- Sayaç geçmişi
- Animasyonlar
- Tema değiştirme

## 8. Test Gereksinimleri

- Manuel tarayıcı testi (Chrome, Firefox, Safari)
- Responsive test (mobil, tablet, masaüstü)
- Klavye erişilebilirlik testi

---

## Ekranlar (Screens)

| # | Ekran Adı | Tür | Açıklama |
|---|-----------|-----|----------|
| 1 | Ana Sayı Ekranı | single-page | Sayı görüntüleme, artır/azalt/sıfırla butonları |
| 2 | Hata Sayfası | error-page | Uygulama hatalarında gösterilen hata ekranı |
| 3 | 404 Sayfası | error-page | Geçersiz route'lar için gösterilen sayfa |
