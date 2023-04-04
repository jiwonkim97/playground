import { MouseEvent, MouseEventHandler, useState } from 'react';

const EtcEtc = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mouseCursorWidth, setMouseCursorWidth] = useState(32);

  const handleMouseMove = (e: MouseEvent) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const onMouseDown = () => {
    setIsClicked(true);
    setMouseCursorWidth(12);
  };

  const onMouseUp = () => {
    setIsClicked(false);
    setMouseCursorWidth(32);
  };

  const onClickButton = () => {
    console.log('click');
  };

  return (
    <div
      style={{ display: 'flex', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <AnimationButton onClick={onClickButton} />
      <Cursor x={x} y={y} mouseCursorWidth={mouseCursorWidth} />
    </div>
  );
};

export default EtcEtc;

/**
 * https://mfisher-apollonas.com/
 * 메인 네비게이션 버튼 클론코딩
 */
interface AnimationButtonProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}
const AnimationButton = ({ onClick }: AnimationButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className='Welcome_buttonWrap'
      style={{
        overflow: 'hidden',
        width: 200,
        height: 45,
        position: 'relative',
        borderRadius: 50,
        cursor: 'pointer',
      }}>
      <button className='Welcome_button' style={{ width: '100%', height: '100%', border: 'none', cursor: 'pointer' }}>
        <div
          className='Welcome_originalBg'
          style={{
            backgroundColor: '#f4efe9',
            borderRadius: '100%',
            display: 'block',
            height: '200%',
            left: '-50%',
            position: 'absolute',
            top: ' -40%',
            width: '200%',
            transition: 'transform .6s',
            transform: 'translate3d(0,0,0)',
          }}
        />
        <div
          className='Welcome_hiddenBg'
          style={{
            backgroundColor: '#544c3f',
            borderRadius: '100%',
            display: 'block',
            height: '200%',
            left: '-50%',
            position: 'absolute',
            top: ' -40%',
            width: '200%',
            transition: 'transform .6s',
            transform: isHover ? 'translate3d(0,15%,0)' : 'translate3d(0,100%,0)',
          }}
        />
        <div className='Welcome_textWrap'>
          <div
            className='Welcome_innerText'
            style={{
              transform: 'translateY(0)',
              transition: 'transform 1s cubic-bezier(.19,.39,0,.99) 2.1s',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <div
              className='Welcome_text'
              style={{
                transition: 'transform .6s cubic-bezier(.36,.28,0,.99)',
                transform: isHover ? 'translate3d(0,-400%,1px) rotate(30deg)' : 'none',
                verticalAlign: 'baseline',
                textAlign: 'center',
                width: 130.953,
                height: 17.844,
                fontFamily: 'WT Kormelink,sans-serif',
                fontStyle: 'italic',
              }}>
              Enter Experience
            </div>
            <div
              className='Welcome_hiddenText'
              style={{
                transform: isHover ? 'none' : 'translate3d(0,400%,1px) rotate(30deg)',
                transition: 'transform .6s cubic-bezier(.36,.28,0,.99)',
                position: 'absolute',
                display: 'block',
                verticalAlign: 'baseline',
                textAlign: 'center',
                width: 130.953,
                height: 17.844,
                color: '#fff',
                fontFamily: 'WT Kormelink,sans-serif',
                fontStyle: 'italic',
              }}>
              Enter Experience
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

interface CursorProps {
  x: number;
  y: number;
  mouseCursorWidth: number;
}
const Cursor = ({ x, y, mouseCursorWidth }: CursorProps) => {
  return (
    <div
      style={{
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
        pointerEvents: 'none', // 아래에 있는 이벤트를 발생시킨다..?
        userSelect: 'none',
      }}
    />
  );
};
