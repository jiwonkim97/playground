import BasePiece from '@/components/Chess/Pieces/Basic';
import KingBlack from '@/public/asset/chess/king-black.png';
import KingWhite from '@/public/asset/chess/king-white.png';
import { ChessColorType } from '@/types/chessTypes';

interface KingProps {
  color: ChessColorType;
}
const King = ({ color }: KingProps) => {
  return <BasePiece color={color} blackImage={KingBlack} whiteImage={KingWhite} type='KING' />;
};

export default King;
