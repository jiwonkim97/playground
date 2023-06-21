import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import styled from '@emotion/styled';

export const Square = styled.div(({ file, rank, isMovable }: { file: ChessFileType; rank: ChessRankType; isMovable: boolean }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: isMovable ? 'rgba(63, 178, 73, 0.3)' : (file.charCodeAt(0) + parseInt(rank)) % 2 === 0 ? '#FFF' : '#3eb249',
  width: 100,
  height: 100,
  padding: 10,
}));
