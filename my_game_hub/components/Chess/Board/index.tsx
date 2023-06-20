import Square from '@/components/Chess/Board/Square';
import Rook from '@/components/Chess/Pieces/Rook';
import { ChessFileType, ChessRankType } from '@/types/chessTypes';
import { ReactNode, useEffect, useState } from 'react';

const Board = () => {
  const files: Array<ChessFileType> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks: Array<ChessRankType> = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const [position, setPosition] = useState<Array<Array<ReactNode>>>([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 8; i++) {
      let row = new Array();
      for (let j = 0; j < 8; j++) {
        row.push(undefined);
      }
      console.log(row);
      arr.push(row);
    }
    arr[0][0] = <Rook color='BLACK' />;
    arr[0][1] = <Rook color='WHITE' />;
    setPosition(arr);
    console.log(arr);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {ranks.map((rank, rankIdx) => {
        return (
          <div style={{ display: 'flex' }} key={`rank-${rankIdx}`}>
            {files.map((file, fileIdx) => {
              return (
                <Square file={file} rank={rank} key={rankIdx.toString() + fileIdx.toString()}>
                  {position[fileIdx][rankIdx] ?? null}
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
