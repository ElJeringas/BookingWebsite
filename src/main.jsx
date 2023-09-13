import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import global_en from '../src/translations/english'
import global_es from '../src/translations/spanish'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation:{escapeValude:false},
  lng:"en",
  resources:{
    en:{
      global:global_en,
    },
    es:{
      global:global_es,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
