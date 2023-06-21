import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import styled from '@emotion/styled';

export const Square = styled.div(({ file, rank }: { file: ChessFileType; rank: ChessRankType }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: (file.charCodeAt(0) + parseInt(rank)) % 2 === 0 ? '#FFF' : '#3eb249',
  width: 100,
  height: 100,
  padding: 10,
}));
