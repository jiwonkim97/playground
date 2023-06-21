import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import BishopBlack from '@/public/asset/chess/bishop-black.png';
import BishopWhite from '@/public/asset/chess/bishop-white.png';

const Bishop = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={BishopBlack} whiteImage={BishopWhite} type='BISHOP' position={position} />;
};

export default Bishop;
