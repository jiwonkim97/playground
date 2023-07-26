import { ReactNode, useRef, useState } from 'react';
import * as S from './styles';

interface PreviewCardProps {
  children: ReactNode;
  title: string;
  content: string;
  contentBgColor?: string;
  textBgColor?: string;
}
const PreviewCard = ({ children, title, content, contentBgColor = '#fff', textBgColor = '#fff' }: PreviewCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState('none');

  const onMouseEnter = () => {
    // handle mouse enter
  };
  const onMouseLeave = () => {
    setTilt('none');
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      let centerPageX = (e.pageX - ref.current.offsetLeft - ref.current.offsetWidth / 2) * 0.01;
      let centerPageY = (e.pageY - ref.current.offsetTop - ref.current.offsetHeight / 2) * 0.01;

      setTilt(`perspective(400px) rotateX(${centerPageY}deg) rotateY(${-centerPageX}deg)`);
    }
  };

  return (
    <S.MainContainer ref={ref} tilt={tilt} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseMove={onMouseMove}>
      <S.PreviewContainer backgroundColor={contentBgColor}>{children}</S.PreviewContainer>
      <S.TextContainer backgroundColor={textBgColor}>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.TextContainer>
    </S.MainContainer>
  );
};
export default PreviewCard;
