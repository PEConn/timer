import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

if ("wakeLock" in navigator) {
  let wakeLock: WakeLockSentinel | null = null;

  (async() => {
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("Got wake lock");
    } catch (err) {
      console.log("Couldn't get wake lock.", err);
    }
  })();

  document.addEventListener("visibilitychange", async () => {
    if (wakeLock !== null && document.visibilityState === "visible") {
      wakeLock = await navigator.wakeLock.request("screen");
    }
  });
} else {
  console.log("Wake lock isn't supported");
}

