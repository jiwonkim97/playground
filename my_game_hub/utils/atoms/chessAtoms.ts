import { ChessFileType, ChessPieceType, ChessRankType } from '@/types/chessTypes';
import getMovableSquares from '@/utils/getMovableSquares';
import { atom, selector } from 'recoil';
import { v4 } from 'uuid';

export interface atomSelectedPieceProps {
  position: {
    file: ChessFileType;
    rank: ChessRankType;
  };
  type: ChessPieceType;
}
const atomSelectedPiece = atom<atomSelectedPieceProps | undefined>({
  key: `chess-atom-selected-piece-${v4()}`,
  default: undefined,
});

const selectorGetMovableSquares = selector({
  key: `chess-selector-get-is-movable-square-${v4()}`,
  get: ({ get }) => {
    const selectedPiece: atomSelectedPieceProps | undefined = get(atomSelectedPiece);

    if (selectedPiece !== undefined) {
      return getMovableSquares(selectedPiece);
    } else {
      return [];
    }
  },
});

export default { atomSelectedPiece, selectorGetMovableSquares };
