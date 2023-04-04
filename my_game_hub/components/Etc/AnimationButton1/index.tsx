import { MouseEventHandler, useState } from 'react';

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

export default AnimationButton;
