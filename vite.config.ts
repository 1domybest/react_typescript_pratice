import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 현재 모드에 맞는 환경 변수 로드
  const env = loadEnv(mode, process.cwd(), '')
  console.log("현재 모드 "  + env.health_check)
  // mode에 따른 포트 설정
  const serverPort = 3000

  return {
    plugins: [react()],
    server: {
      port: serverPort
    },
  }
});