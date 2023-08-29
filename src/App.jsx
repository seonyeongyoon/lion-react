import AuthProvider from '@/contexts/Auth';
import ThemeProvider from '@/contexts/Theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

//쿼리 클라이언트 객체 생성
const queryClient = new QueryClient(); //모든 쿼리에 사용되는 기본 옵션

//쿼리 클라이언트를 앱에 공급

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <div className="App">
                <RouterProvider router={router} />
              </div>
              <ReactQueryDevtools/>
            </QueryClientProvider>
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
