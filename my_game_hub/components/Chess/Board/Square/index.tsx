import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import chessAtoms from '@/utils/atoms/chessAtoms';
import { ReactNode, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as S from './styles';

interface SquareProps {
  file: ChessFileType;
  rank: ChessRankType;
  children?: ReactNode;
}
const Square = ({ file, rank, children }: SquareProps) => {
  const setSelectedPiece = useSetRecoilState(chessAtoms.atomSelectedPiece);
  const movableSquares = useRecoilValue(chessAtoms.selectorGetMovableSquares);

  const onClick = () => {
    setSelectedPiece(undefined);
  };

  useEffect(() => {
    // console.log(movableSquares);
  }, [movableSquares]);

  return (
    <S.Square file={file} rank={rank} onClick={onClick} isMovable={movableSquares.includes(`${file}${rank}`) && children === undefined}>
      {children}
    </S.Square>
  );
};

export default Square;
