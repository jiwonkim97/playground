import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_WORDLINK_API_KEY);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        style={{
          display: 'flex',
        }}>
        <Link href='/canvas'>
          <button style={{ display: 'flex', width: 200, height: 60, alignItems: 'center', justifyContent: 'center' }}>CANVAS</button>
        </Link>
        <Link href='/games'>
          <button style={{ display: 'flex', width: 200, height: 60, alignItems: 'center', justifyContent: 'center' }}>GAMES</button>
        </Link>
        <Link href='/etc'>
          <button style={{ display: 'flex', width: 200, height: 60, alignItems: 'center', justifyContent: 'center' }}>ETC</button>
        </Link>
      </div>
    </>
  );
}
