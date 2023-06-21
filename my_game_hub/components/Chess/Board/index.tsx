import Square from '@/components/Chess/Board/Square';
import Bishop from '@/components/Chess/Pieces/Bishop';
import King from '@/components/Chess/Pieces/King';
import Knight from '@/components/Chess/Pieces/Knight';
import Pawn from '@/components/Chess/Pieces/Pawn';
import Queen from '@/components/Chess/Pieces/Queen';
import Rook from '@/components/Chess/Pieces/Rook';
import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import { ReactNode, useEffect, useState } from 'react';

const Board = () => {
  const files: Array<ChessFileType> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks: Array<ChessRankType> = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const [position, setPosition] = useState<Array<Array<ReactNode>>>([]);

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
                <Square file={files[fileIdx]} rank={ranks[rankIdx]} key={rankIdx.toString() + fileIdx.toString()}>
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
  arr[6][0] = <Pawn color='BLACK' />;
  arr[6][1] = <Pawn color='BLACK' />;
  arr[6][2] = <Pawn color='BLACK' />;
  arr[6][3] = <Pawn color='BLACK' />;
  arr[6][4] = <Pawn color='BLACK' />;
  arr[6][5] = <Pawn color='BLACK' />;
  arr[6][6] = <Pawn color='BLACK' />;
  arr[6][7] = <Pawn color='BLACK' />;

  arr[7][0] = <Rook color='BLACK' />;
  arr[7][7] = <Rook color='BLACK' />;

  arr[7][1] = <Knight color='BLACK' />;
  arr[7][6] = <Knight color='BLACK' />;

  arr[7][2] = <Bishop color='BLACK' />;
  arr[7][5] = <Bishop color='BLACK' />;

  arr[7][3] = <King color='BLACK' />;

  arr[7][4] = <Queen color='BLACK' />;

  arr[1][0] = <Pawn color='WHITE' />;
  arr[1][1] = <Pawn color='WHITE' />;
  arr[1][2] = <Pawn color='WHITE' />;
  arr[1][3] = <Pawn color='WHITE' />;
  arr[1][4] = <Pawn color='WHITE' />;
  arr[1][5] = <Pawn color='WHITE' />;
  arr[1][6] = <Pawn color='WHITE' />;
  arr[1][7] = <Pawn color='WHITE' />;

  arr[0][0] = <Rook color='WHITE' />;
  arr[0][7] = <Rook color='WHITE' />;

  arr[0][1] = <Knight color='WHITE' />;
  arr[0][6] = <Knight color='WHITE' />;

  arr[0][2] = <Bishop color='WHITE' />;
  arr[0][5] = <Bishop color='WHITE' />;

  arr[0][3] = <King color='WHITE' />;

  arr[0][4] = <Queen color='WHITE' />;

  return arr;
}
