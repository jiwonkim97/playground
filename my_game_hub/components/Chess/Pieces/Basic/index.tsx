import { ChessColorType, ChessFileType, ChessPieceType, ChessRankType } from '@/types/chessTypes';
import ChessAtom from '@/utils/atoms/chessAtoms';
import Image, { StaticImageData } from 'next/image';
import { useSetRecoilState } from 'recoil';

export interface PieceProps {
  color: ChessColorType;
  position: { file: ChessFileType; rank: ChessRankType };
}
interface BasePieceProps extends PieceProps {
  type: ChessPieceType;
  blackImage: StaticImageData;
  whiteImage: StaticImageData;
}
const BasePiece = ({ color, blackImage, whiteImage, type, position }: BasePieceProps) => {
  const setAtomSelectedPiece = useSetRecoilState(ChessAtom.atomSelectedPiece);
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log('BASIC');
    // console.log(type, position);
    setAtomSelectedPiece({
      type: type,
      position: position,
    });
  };
  return (
    <div style={{ padding: 0, position: 'relative' }} onClick={onClick}>
      {color === 'BLACK' ? (
        <Image src={blackImage} alt={`chess-${type.toLowerCase()}-black`} priority style={{ width: '100%', height: '100%' }} />
      ) : (
        <Image src={whiteImage} alt={`chess-${type.toLowerCase()}-white`} priority style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default BasePiece;
