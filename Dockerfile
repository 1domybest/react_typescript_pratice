# 1. Nginx를 기반으로 배포 환경 설정
FROM nginx:alpine AS production

# 2. 환경 변수 설정 파일 생성 (컨테이너 이름에 따라 설정)
ARG COLOR
RUN if [ ! -f /etc/nginx/conf.d/react_service_env.inc ]; then \
      echo "set \$color ${COLOR};" > /etc/nginx/conf.d/react_service_env.inc; \
    else \
      sed -i "s|set \$color .*|set \$color ${COLOR};|" /etc/nginx/conf.d/react_service_env.inc; \
    fi

# 3. 기본 Nginx 설정 파일 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 4. GitHub Actions에서 빌드한 결과물 /app/dist를 Nginx 서빙 디렉토리로 복사
COPY dist /usr/share/nginx/html

# 5. Nginx 환경 변수 적용을 위한 envsubst
RUN apk add --no-cache gettext && \
    envsubst < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf

# 6. Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
