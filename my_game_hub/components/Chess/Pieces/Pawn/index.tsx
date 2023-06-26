import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import PawnBlack from '@/public/asset/chess/Pawn-black.webp';
import RookWhite from '@/public/asset/chess/Pawn-white.webp';

const Pawn = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={PawnBlack} whiteImage={RookWhite} type='PAWN' position={position} />;
};

export default Pawn;
