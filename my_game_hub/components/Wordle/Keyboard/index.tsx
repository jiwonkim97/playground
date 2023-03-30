import KeyBox from '@/components/Wordle/Keyboard/KeyBox';
import { TKeyboard } from '@/types/publicTypes';

const Keyboard = ({ onClick, userInput, answer }: { onClick: Function; userInput: string[]; answer: string }) => {
  const row1: Array<TKeyboard> = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2: Array<TKeyboard> = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const row3: Array<TKeyboard> = ['ENT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'BS'];

  const getStatus: (arg1: TKeyboard) => 'CORRECT' | 'PRESENT' | 'ABSENT' | 'NONE' = key => {
    if (userInput.join('').includes(key)) {
      if (answer.toLowerCase().includes(key)) {
        let keyIdx = userInput.map(item => item.indexOf(key));
        if (keyIdx.includes(answer.toLowerCase().indexOf(key))) {
          return 'CORRECT';
        } else {
          return 'PRESENT';
        }
      } else {
        return 'ABSENT';
      }
    } else {
      return 'NONE';
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%',
      }}>
      <div style={{ display: 'flex', gap: 6 }}>
        {row1.map((item, idx) => (
          <KeyBox word={item} key={idx} status={getStatus(item)} onClick={() => onClick(item)} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: 5 }}>
        {row2.map((item, idx) => (
          <KeyBox word={item} key={idx} status={getStatus(item)} onClick={() => onClick(item)} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: 5 }}>
        {row3.map((item, idx) => (
          <KeyBox word={item} key={idx} status={getStatus(item)} onClick={() => onClick(item)} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
