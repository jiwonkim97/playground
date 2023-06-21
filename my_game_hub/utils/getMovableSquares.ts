import { FILES, RANKS } from '@/components/Chess/Board';
import { atomSelectedPieceProps } from '@/utils/atoms/chessAtoms';

const getMovableSquares = ({ type, position }: atomSelectedPieceProps) => {
  let arr: Array<string> = ['a1', 'a3'];
  const fileIdx = FILES.indexOf(position.file);
  const rankIdx = RANKS.indexOf(position.rank);
  // console.log(fileIdx, rankIdx);

  switch (type) {
    case 'KING':
      break;
    case 'QUEEN':
      break;
    case 'ROOK':
      break;
    case 'BISHOP':
      break;
    case 'KNIGHT':
      break;
    case 'PAWN':
      break;
  }

  return arr;
};

export default getMovableSquares;
