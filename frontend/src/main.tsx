
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { ApiProvider } from './context.tsx'

createRoot(document.getElementById('root')!).render(

<BrowserRouter basename="/Doctor-Appointment">

<ApiProvider>

<App />
</ApiProvider>

</BrowserRouter>

  
    
  
)
