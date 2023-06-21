import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import KnightBlack from '@/public/asset/chess/knight-black.png';
import KnightWhite from '@/public/asset/chess/knight-white.png';

const Knight = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={KnightBlack} whiteImage={KnightWhite} type='KNIGHT' position={position} />;
};

export default Knight;
