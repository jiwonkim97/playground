import { BasePiece } from '@/components/Chess/Pieces/Basic';
import RookBlack from '@/public/asset/chess/rook-black.png';
import RookWhite from '@/public/asset/chess/rook-white.png';
import { ChessColorType } from '@/types/chessTypes';
import Image from 'next/image';
import { useRef } from 'react';

interface RookProps {
  color: ChessColorType;
}
const Rook = ({ color }: RookProps) => {
  const piece = useRef(new BasePiece('ROOK', color));
  return <div>{color === 'BLACK' ? <Image src={RookBlack} alt='chess-rook-black' /> : <Image src={RookWhite} alt='chess-rook-white' />}</div>;
};

export default Rook;
