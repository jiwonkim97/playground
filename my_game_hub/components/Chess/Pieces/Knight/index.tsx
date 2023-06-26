import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import KnightBlack from '@/public/asset/chess/knight-black.webp';
import KnightWhite from '@/public/asset/chess/knight-white.webp';

const Knight = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={KnightBlack} whiteImage={KnightWhite} type='KNIGHT' position={position} />;
};

export default Knight;
