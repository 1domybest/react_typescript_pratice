# 1. Node.js 기반 이미지 사용 (빌드 단계)
FROM node:22.13.0-alpine AS build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json 및 package-lock.json 파일 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. React 애플리케이션 빌드
COPY . .
RUN npm run build

# 6. 개발 서버 실행 (포트 3000에서 실행)
CMD ["npm", "run", "dev"]