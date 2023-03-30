import Keyboard from '@/components/Wordle/Keyboard';
import WordBox from '@/components/Wordle/WordBox';
import { WORDS } from '@/config/5letterWords';
import { TKeyboard } from '@/types/publicTypes';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
const ANSWER = WORDS[Math.ceil(Math.random() * WORDS.length)];

export default function Home() {
  const rowItem = [0, 1, 2, 3, 4];
  const [userInput, setUserInput] = useState(['', '', '', '', '', '']);
  const [curCol, setCurCol] = useState(0);
  const onClickKeyboard = (key: TKeyboard) => {
    if (userInput.slice(0, curCol).includes(ANSWER.toLowerCase()) || curCol === 6) {
      return;
    }
    switch (key) {
      case 'ENT':
        if (userInput[curCol].length !== 5) return;
        setCurCol(cur => (cur += 1));
        return;
      case 'BS':
        if (userInput[curCol].length === 0) return;
        setUserInput(cur => {
          let arr = [...cur];

          arr[curCol] = arr[curCol].slice(0, arr[curCol].length - 1);
          return arr;
        });
        break;
      default:
        if (userInput[curCol].length === 5) return;
        setUserInput(cur => {
          let arr = [...cur];

          arr[curCol] = arr[curCol] + key;
          return arr;
        });
        break;
    }
  };
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
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          gap: 20,
          alignSelf: 'center',
          width: '100%',
          padding: '0 16px',
        }}>
        {curCol === 6 ? (
          <div
            style={{
              fontFamily: 'nyt-franklin',
              fontWeight: 'bold',
            }}>
            ANSWER IS : {ANSWER.toUpperCase()}
          </div>
        ) : null}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            maxWidth: 500,
          }}>
          {[rowItem, rowItem, rowItem, rowItem, rowItem, rowItem].map((col, colIdx) => (
            <div style={{ gap: 5, display: 'flex' }} key={colIdx}>
              {col.map((row, rowIdx) => (
                <WordBox answer={ANSWER} guess={userInput[colIdx].split('')[rowIdx] ?? ''} index={rowIdx} key={rowIdx} showAnswer={colIdx < curCol} />
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: 500,
          }}>
          <Keyboard onClick={onClickKeyboard} userInput={userInput.slice(0, curCol)} answer={ANSWER} />
        </div>
      </div>
    </>
  );
}
