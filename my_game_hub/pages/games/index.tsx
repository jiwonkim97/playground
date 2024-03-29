import Link from 'next/link';
import * as S from './styles';
const GamesPage = () => {
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
        <Link href='/games/wordle'>
          <S.LinkButton>wordle</S.LinkButton>
        </Link>
        <Link href='/games/chess'>
          <S.LinkButton>chess</S.LinkButton>
        </Link>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
      </div>
    </div>
  );
};

export default GamesPage;
