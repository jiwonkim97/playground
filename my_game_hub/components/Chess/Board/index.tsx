import Square from '@/components/Chess/Board/Square';
import Bishop from '@/components/Chess/Pieces/Bishop';
import King from '@/components/Chess/Pieces/King';
import Knight from '@/components/Chess/Pieces/Knight';
import Pawn from '@/components/Chess/Pieces/Pawn';
import Queen from '@/components/Chess/Pieces/Queen';
import Rook from '@/components/Chess/Pieces/Rook';
import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import ChessAtom from '@/utils/atoms/chessAtoms';
import { ReactNode, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export const FILES: Array<ChessFileType> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const RANKS: Array<ChessRankType> = ['8', '7', '6', '5', '4', '3', '2', '1'];

const Board = () => {
  const [position, setPosition] = useState<Array<Array<ReactNode>>>([]);
  const selectedPiece = useRecoilValue(ChessAtom.atomSelectedPiece);

  useEffect(() => {
    setPosition(initializeBoard());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {position.map((row, rankIdx) => {
        return (
          <div style={{ display: 'flex' }} key={`rank-${rankIdx}`}>
            {row.map((item, fileIdx) => {
              return (
                <Square file={FILES[fileIdx]} rank={RANKS[rankIdx]} key={rankIdx.toString() + fileIdx.toString()}>
                  {item}
                </Square>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;

function initializeBoard() {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    let row = new Array();
    for (let j = 0; j < 8; j++) {
      row.push(undefined);
    }
    arr.push(row);
  }
  arr = initializePices(arr);
  return arr;
}

function initializePices(arr: Array<Array<ReactNode>>) {
  arr[6][0] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[0] }} />;
  arr[6][1] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[1] }} />;
  arr[6][2] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[2] }} />;
  arr[6][3] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[3] }} />;
  arr[6][4] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[4] }} />;
  arr[6][5] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[5] }} />;
  arr[6][6] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[6] }} />;
  arr[6][7] = <Pawn color='BLACK' position={{ rank: RANKS[6], file: FILES[7] }} />;

  arr[7][0] = <Rook color='BLACK' position={{ rank: RANKS[7], file: FILES[0] }} />;
  arr[7][7] = <Rook color='BLACK' position={{ rank: RANKS[7], file: FILES[7] }} />;

  arr[7][1] = <Knight color='BLACK' position={{ rank: RANKS[7], file: FILES[1] }} />;
  arr[7][6] = <Knight color='BLACK' position={{ rank: RANKS[7], file: FILES[6] }} />;

  arr[7][2] = <Bishop color='BLACK' position={{ rank: RANKS[7], file: FILES[2] }} />;
  arr[7][5] = <Bishop color='BLACK' position={{ rank: RANKS[7], file: FILES[5] }} />;

  arr[7][3] = <King color='BLACK' position={{ rank: RANKS[7], file: FILES[3] }} />;

  arr[7][4] = <Queen color='BLACK' position={{ rank: RANKS[7], file: FILES[4] }} />;

  arr[1][0] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[0] }} />;
  arr[1][1] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[1] }} />;
  arr[1][2] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[2] }} />;
  arr[1][3] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[3] }} />;
  arr[1][4] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[4] }} />;
  arr[1][5] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[5] }} />;
  arr[1][6] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[6] }} />;
  arr[1][7] = <Pawn color='WHITE' position={{ rank: RANKS[1], file: FILES[7] }} />;

  arr[0][0] = <Rook color='WHITE' position={{ rank: RANKS[0], file: FILES[0] }} />;
  arr[0][7] = <Rook color='WHITE' position={{ rank: RANKS[0], file: FILES[7] }} />;

  arr[0][1] = <Knight color='WHITE' position={{ rank: RANKS[0], file: FILES[1] }} />;
  arr[0][6] = <Knight color='WHITE' position={{ rank: RANKS[0], file: FILES[6] }} />;

  arr[0][2] = <Bishop color='WHITE' position={{ rank: RANKS[0], file: FILES[2] }} />;
  arr[0][5] = <Bishop color='WHITE' position={{ rank: RANKS[0], file: FILES[5] }} />;

  arr[0][3] = <King color='WHITE' position={{ rank: RANKS[0], file: FILES[3] }} />;

  arr[0][4] = <Queen color='WHITE' position={{ rank: RANKS[0], file: FILES[4] }} />;

  return arr;
}
