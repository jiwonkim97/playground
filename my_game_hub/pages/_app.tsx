import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100vw',
        minHeight: '100vh',
      }}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
  );
}

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
