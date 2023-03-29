import Link from 'next/link';
import * as S from './styles';
const TestPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>
      <div style={{ height: 60 }} />
      <div
        style={{
          display: 'flex',
          gap: 5,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <Link href='/canvas/stage_lighting_wave'>
          <S.LinkButton>stage_lighting_wave</S.LinkButton>
        </Link>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
      </div>
    </div>
  );
};

export default TestPage;
