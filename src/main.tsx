import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import './index.css'
import { UserProvider } from './hooks/useUser'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <UserProvider>
        <AppRoutes/>
    </UserProvider>

  </React.StrictMode>,
)
