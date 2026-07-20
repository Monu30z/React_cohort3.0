import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Textcomponent from './components/Textcomponent.jsx'
import { ContextProvider } from './context/ContextProvider.jsx'
import { MyshopProvider } from './context/MyWebsite.jsx'


createRoot(document.getElementById('root')).render(
<MyshopProvider>
<App/>
</MyshopProvider>
  
)
