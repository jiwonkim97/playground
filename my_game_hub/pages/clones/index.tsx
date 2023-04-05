import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';
const ClonesPage = () => {
  const router = useRouter();
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
        <Link href={`${router.asPath}/viniciussiega`}>
          <S.LinkButton>viniciussiega.com</S.LinkButton>
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

export default ClonesPage;
