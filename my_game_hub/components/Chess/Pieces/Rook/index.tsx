import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import RookBlack from '@/public/asset/chess/rook-black.png';
import RookWhite from '@/public/asset/chess/rook-white.png';

const Rook = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={RookBlack} whiteImage={RookWhite} type='ROOK' position={position} />;
};

export default Rook;
