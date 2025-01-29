## 1. Nginx 기반으로 빌드된 정적 파일 서빙
#FROM nginx:stable-alpine
#
## 2. GitHub Actions에서 빌드된 dist 폴더를 Nginx에 복사
#COPY default.conf /etc/nginx/conf.d/default.conf
#COPY dist /usr/share/nginx/html
## 3. Nginx 포트 오픈
##EXPOSE 3000
#
## 4. Nginx 실행
#CMD ["nginx", "-g", "daemon off;"]



# 1. Node.js 이미지로 Vite 빌드
FROM node:22.13.0-alpine AS build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 프로젝트 소스 복사
COPY . .

# 4. 의존성 설치 (Vite 포함)
RUN npm install
#RUN npm install vite

# 5. 환경에 맞는 Vite 빌드 실행 (모드 이름을 ${ENV}로 전달)
RUN npm build --mode ${ENV}

# 6. Nginx로 정적 파일을 서빙하는 단계
FROM nginx:stable-alpine

# 7. 빌드된 파일을 Nginx용으로 복사
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# 8. Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
