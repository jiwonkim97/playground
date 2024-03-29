import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

const EtcPage = () => {
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
        <Link href={`${router.asPath}/sw_rune_checker`}>
          <S.LinkButton>서머너즈워 룬 점수</S.LinkButton>
        </Link>
        <Link href={`${router.asPath}/scroll_animation`}>
          <S.LinkButton>스크롤 애니메이션</S.LinkButton>
        </Link>
        <Link href={`${router.asPath}/etc`}>
          <S.LinkButton>잡다</S.LinkButton>
        </Link>
        <Link href={`${router.asPath}/webview`}>
          <S.LinkButton>웹뷰 카메라 테스트</S.LinkButton>
        </Link>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
        <S.LinkButton disabled>asdf</S.LinkButton>
      </div>
    </div>
  );
};

export default EtcPage;
