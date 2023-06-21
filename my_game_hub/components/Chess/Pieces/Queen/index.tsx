import BasePiece from '@/components/Chess/Pieces/Basic';
import QueenBlack from '@/public/asset/chess/queen-black.png';
import QueenWhite from '@/public/asset/chess/queen-white.png';
import { ChessColorType } from '@/types/chessTypes';

interface QueenProps {
  color: ChessColorType;
}
const Queen = ({ color }: QueenProps) => {
  return <BasePiece color={color} blackImage={QueenBlack} whiteImage={QueenWhite} type='QUEEN' />;
};

export default Queen;
