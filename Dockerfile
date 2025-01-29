# 1. Nginx 기반으로 빌드된 정적 파일 서빙
FROM nginx:stable-alpine

# 2. GitHub Actions에서 빌드된 dist 폴더를 Nginx에 복사
COPY dist /usr/share/nginx/html

# 3. Nginx 포트 오픈
EXPOSE 3000

# 4. Nginx 실행
CMD ["nginx", "-g", "daemon off;"]