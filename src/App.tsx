import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouter } from './navigation'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <AppRouter />
    </QueryClientProvider>
  )
}
