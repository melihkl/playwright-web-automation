# Temel imaj olarak Playwright kullan
FROM mcr.microsoft.com/playwright:v1.45.2-focal

# Çalışma dizini oluştur ve ayarla
WORKDIR /app

# Paketleri kopyala
COPY package.json package-lock.json* ./

# Gerekli Node.js paketlerini yükle
RUN npm install

# Test dosyalarını kopyala
COPY tests ./tests

# Yalnızca Chromium'u yükle
RUN npx playwright install chromium

# Testleri çalıştır
CMD ["npx", "playwright", "test", "--reporter=html"]

