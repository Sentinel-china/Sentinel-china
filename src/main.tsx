import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
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
    <App />
  </ThemeProvider>
)
