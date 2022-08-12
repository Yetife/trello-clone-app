import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AppStateProvider} from "./AppStateContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
)
