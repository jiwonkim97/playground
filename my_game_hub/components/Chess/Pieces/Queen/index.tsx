import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import QueenBlack from '@/public/asset/chess/queen-black.webp';
import QueenWhite from '@/public/asset/chess/queen-white.webp';

const Queen = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={QueenBlack} whiteImage={QueenWhite} type='QUEEN' position={position} />;
};

export default Queen;
