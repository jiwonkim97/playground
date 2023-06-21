import BasePiece from '@/components/Chess/Pieces/Basic';
import RookBlack from '@/public/asset/chess/rook-black.png';
import RookWhite from '@/public/asset/chess/rook-white.png';
import { ChessColorType } from '@/types/chessTypes';

interface RookProps {
  color: ChessColorType;
}
const Rook = ({ color }: RookProps) => {
  return <BasePiece color={color} blackImage={RookBlack} whiteImage={RookWhite} type='ROOK' />;
};

export default Rook;
