// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const root = document.getElementById("root");

if (root) {
    const envDiv = document.createElement("div");
    envDiv.className = "env";
    envDiv.innerText = import.meta.env.health_check || "unknown";
    root.appendChild(envDiv);
}

createRoot(document.getElementById('root')!).render(
    // 배포시 StrictMode 이걸 빼야함
    // 그이유는
    // https://s-ryung.tistory.com/1 참고
    <App />
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
