import AnimationButton from '@/components/Etc/AnimationButton1';
import Cursor from '@/components/Etc/CursorPointer';
import { MouseEvent, useState } from 'react';

const EtcEtc = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const onClickButton = () => {
    console.log('click');
  };

  return (
    <div
      style={{ display: 'flex', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}
      onMouseMove={handleMouseMove}>
      <AnimationButton onClick={onClickButton} />
      <Cursor x={x} y={y} />
    </div>
  );
};

export default EtcEtc;
