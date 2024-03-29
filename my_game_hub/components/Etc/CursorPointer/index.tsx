import { colors } from '@/config/globalColors';
import { useState } from 'react';

interface CursorProps {
  x: number;
  y: number;
  color?: string;
}
const Cursor = ({ x, y, color = colors.GRAY_BLACK }: CursorProps) => {
  const [mouseCursorWidth, setMouseCursorWidth] = useState(32);

  const onMouseDown = () => {
    setMouseCursorWidth(12);
  };

  const onMouseUp = () => {
    setMouseCursorWidth(32);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{
        zIndex: 1e9,
        position: 'absolute',
        top: y,
        left: x,
        width: mouseCursorWidth,
        height: mouseCursorWidth,
        borderRadius: '100%',
        border: 'solid 1px #aaa',
        transition: 'width .45s ease,height .45s ease',
        transform: 'translate3d(-50%,-50%,0)',
        display: 'inline-block',
        pointerEvents: 'none', // 아래에 있는 이벤트를 발생시킨다..? 커서의 클릭이벤트가 없어진다?
        userSelect: 'none',
        backgroundColor: color,
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default Cursor;
