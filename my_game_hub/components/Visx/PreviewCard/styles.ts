import styled from '@emotion/styled';

export const MainContainer = styled.div(({ tilt }: { tilt: string }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  borderRadius: 10,
  height: 400,
  width: 300,
  overflow: 'hidden',
  transform: tilt,
  cursor: 'pointer',
}));

export const PreviewContainer = styled.div(({ backgroundColor }: { backgroundColor: string }) => ({
  display: 'flex',
  flex: 1,
  backgroundColor: backgroundColor,
}));

export const TextContainer = styled.div(({ backgroundColor }: { backgroundColor: string }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px 20px',
  backgroundColor: backgroundColor,
}));

export const Title = styled.p({
  fontSize: 24,
  fontWeight: 900,
  color: '#000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
});

export const Content = styled.p({
  fontSize: 14,
  fontWeight: 300,
  color: '#000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
});
