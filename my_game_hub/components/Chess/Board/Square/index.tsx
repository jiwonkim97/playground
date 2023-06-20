import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import { ReactNode } from 'react';

interface SquareProps {
  file: ChessFileType;
  rank: ChessRankType;
  children?: ReactNode;
}
const Square = ({ file, rank, children }: SquareProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: (file.charCodeAt(0) + parseInt(rank)) % 2 === 0 ? '#FFF' : '#000',
        width: 100,
        height: 100,
      }}>
      {children}
    </div>
  );
};

export default Square;
