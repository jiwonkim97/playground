import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const handleMouseMove = (e: MouseEvent) => {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };
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
  return <RecoilRoot>{children}</RecoilRoot>;
};
