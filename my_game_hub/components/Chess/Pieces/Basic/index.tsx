import { ChessColorType, ChessPieceType } from '@/types/chessTypes';

export interface BasePieceProps {
  type: ChessPieceType;
  color: ChessColorType;
}
export class BasePiece implements BasePieceProps {
  type: ChessPieceType;
  color: ChessColorType;

  constructor(type: ChessPieceType, color: ChessColorType) {
    this.type = type;
    this.color = color;
  }
}
