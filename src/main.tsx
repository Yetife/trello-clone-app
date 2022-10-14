import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DndProvider } from "react-dnd"
// @ts-ignore
import {Backend}from "react-dnd-html5-backend"
import { HTML5Backend } from 'react-dnd-html5-backend'
import {AppStateProvider} from "./AppStateContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // @ts-ignore
    <DndProvider backend={ HTML5Backend}>
        <AppStateProvider>
            <App />
        </AppStateProvider>
    </DndProvider>
)
