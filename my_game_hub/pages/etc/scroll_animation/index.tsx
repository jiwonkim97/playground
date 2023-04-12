import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const ScrollAnimation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', flex: 1, overflow: 'auto' }}>
      <Content idx={1} color='#e3e' />
      <Content idx={2} color='#3e3' />
      <Content idx={3} color='#3ee' />
    </div>
  );
};

export default ScrollAnimation;

const Content = ({ idx, color }: { idx: number; color: string }) => {
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    if (!observerTargetEl.current) return;

    let observer = new IntersectionObserver((entries, ob) => {
      if (entries[0].isIntersecting) {
        console.log('show', idx);
        setIsShow(true);
      } else {
        // setIsShow(false);
      }
    });
    observer.observe(observerTargetEl.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(isHover);
  }, [isHover]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        height: 1500,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'url(/asset/sw/AccuracyRune.webp), auto',
      }}>
      <div ref={observerTargetEl} />
      {isShow ? (
        <SmoothAppearDiv
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isShow={isShow}
          style={{
            backgroundColor: color,
            transform: `translateY(${isHover ? -30 : 0}px)`,
            transition: 'all linear .2s',
            // cursor: 'pointer',
            borderRadius: 30,
            boxShadow: isHover ? '0 10px 15px rgba(0,0,0,0.5)' : '',
          }}
        />
      ) : null}
    </div>
  );
};

const SmoothAppearDiv = styled.div(({ isShow }: { isShow: boolean }) => ({
  width: 700,
  height: 500,
  // transform: 'translate3d(0,0,0)',
  // transition: 'all ease 3s',
  animation: `${smoothAppear} .5s linear`,
}));

const smoothAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
