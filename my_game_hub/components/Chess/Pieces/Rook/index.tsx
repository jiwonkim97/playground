import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import RookBlack from '@/public/asset/chess/rook-black.webp';
import RookWhite from '@/public/asset/chess/rook-white.webp';

const Rook = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={RookBlack} whiteImage={RookWhite} type='ROOK' position={position} />;
};

export default Rook;
