import BasePiece from '@/components/Chess/Pieces/Basic';
import KnightBlack from '@/public/asset/chess/knight-black.png';
import KnightWhite from '@/public/asset/chess/knight-white.png';
import { ChessColorType } from '@/types/chessTypes';

interface KnightProps {
  color: ChessColorType;
}
const Knight = ({ color }: KnightProps) => {
  return <BasePiece color={color} blackImage={KnightBlack} whiteImage={KnightWhite} type='KNIGHT' />;
};

export default Knight;
