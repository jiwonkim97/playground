import { useState } from 'react';

const ToggleButton = () => {
  const [selected, setSelected] = useState<1 | 2 | 3>(1);
  return (
    <div>
      <div style={{ width: 390, height: 50, backgroundColor: '#ccc', borderRadius: 50, display: 'flex', position: 'relative' }}>
        <div
          style={{
            marginLeft: (selected - 1) * 130,
            width: 130,
            height: '100%',
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            mixBlendMode: 'multiply',
            backgroundColor: '#3e3',
            transition: 'margin-left ease .5s',
          }}
        />
        <div
          onClick={() => setSelected(1)}
          style={{
            userSelect: 'none',
            cursor: 'pointer',
            width: 130,
            height: '100%',
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: selected === 1 ? '#FFF' : '#000',
          }}>
          TOGGLE1
        </div>
        <div
          onClick={() => setSelected(2)}
          style={{
            userSelect: 'none',
            cursor: 'pointer',
            width: 130,
            height: '100%',
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: selected === 2 ? '#FFF' : '#000',
          }}>
          TOGGLE2
        </div>
        <div
          onClick={() => setSelected(3)}
          style={{
            userSelect: 'none',
            cursor: 'pointer',
            width: 130,
            height: '100%',
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: selected === 3 ? '#FFF' : '#000',
          }}>
          TOGGLE3
        </div>
      </div>
    </div>
  );
};
export default ToggleButton;
