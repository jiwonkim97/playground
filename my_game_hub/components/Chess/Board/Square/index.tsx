import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import { ReactNode } from 'react';
import * as S from './styles';

interface SquareProps {
  file: ChessFileType;
  rank: ChessRankType;
  children?: ReactNode;
}
const Square = ({ file, rank, children }: SquareProps) => {
  return (
    <S.Square file={file} rank={rank}>
      {children}
    </S.Square>
  );
};

export default Square;
