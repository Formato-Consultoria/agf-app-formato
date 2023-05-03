import { AuthProvider } from '@/context/auth-context'
import sessionMiddleware from '@/middleware/sessionMiddleware'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App;