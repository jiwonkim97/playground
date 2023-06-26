import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import KingBlack from '@/public/asset/chess/king-black.webp';
import KingWhite from '@/public/asset/chess/king-white.webp';

const King = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={KingBlack} whiteImage={KingWhite} type='KING' position={position} />;
};

export default King;
