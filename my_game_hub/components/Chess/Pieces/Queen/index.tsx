import BasePiece, { PieceProps } from '@/components/Chess/Pieces/Basic';
import QueenBlack from '@/public/asset/chess/queen-black.png';
import QueenWhite from '@/public/asset/chess/queen-white.png';

const Queen = ({ color, position }: PieceProps) => {
  return <BasePiece color={color} blackImage={QueenBlack} whiteImage={QueenWhite} type='QUEEN' position={position} />;
};

export default Queen;
