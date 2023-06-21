import BasePiece from '@/components/Chess/Pieces/Basic';
import BishopBlack from '@/public/asset/chess/bishop-black.png';
import BishopWhite from '@/public/asset/chess/bishop-white.png';
import { ChessColorType } from '@/types/chessTypes';

interface BishopProps {
  color: ChessColorType;
}
const Bishop = ({ color }: BishopProps) => {
  return <BasePiece color={color} blackImage={BishopBlack} whiteImage={BishopWhite} type='BISHOP' />;
};

export default Bishop;
