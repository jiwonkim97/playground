import BasePiece from '@/components/Chess/Pieces/Basic';
import PawnBlack from '@/public/asset/chess/Pawn-black.png';
import RookWhite from '@/public/asset/chess/Pawn-white.png';
import { ChessColorType } from '@/types/chessTypes';

interface PawnProps {
  color: ChessColorType;
}
const Pawn = ({ color }: PawnProps) => {
  return <BasePiece color={color} blackImage={PawnBlack} whiteImage={RookWhite} type='PAWN' />;
};

export default Pawn;
