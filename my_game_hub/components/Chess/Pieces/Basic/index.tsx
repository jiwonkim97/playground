import { ChessColorType, ChessPieceType } from '@/types/chessTypes';
import Image, { StaticImageData } from 'next/image';

interface BasePieceProps {
  type: ChessPieceType;
  color: ChessColorType;
  blackImage: StaticImageData;
  whiteImage: StaticImageData;
}
const BasePiece = ({ color, blackImage, whiteImage, type }: BasePieceProps) => {
  return (
    <div style={{ padding: 0, position: 'relative' }}>
      {color === 'BLACK' ? (
        <Image src={blackImage} alt={`chess-${type.toLowerCase()}-black`} style={{ width: '100%', height: '100%' }} />
      ) : (
        <Image src={whiteImage} alt={`chess-${type.toLowerCase()}-white`} style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default BasePiece;
