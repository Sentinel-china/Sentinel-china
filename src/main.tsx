import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from './context/LanguageContext'
import './i18n/config'
import './shadcn.css'
import App from './App'

const root = createRoot(document.getElementById('app')!)
root.render(
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={true}
    disableTransitionOnChange={false}
  >
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
)
