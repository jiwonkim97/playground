import Bubble from "@/components/Bubble";
import Player from "@/components/Player";
import {
  TGridType,
  atomBubblePositions,
  atomGridSize,
  atomNumPerLine,
} from "@/recoil/atoms";
import { useRecoilValue } from "recoil";

const Grid = ({ x, y, type }: { x: number; y: number; type: TGridType }) => {
  const gridSize = useRecoilValue(atomGridSize);
  const numPerLine = useRecoilValue(atomNumPerLine);
  const bubblePositions = useRecoilValue(atomBubblePositions);

  return (
    <div
      style={{
        display: "flex",
        width: gridSize,
        height: gridSize,
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px",
      }}
    >
      {type === "" ? (
        x * numPerLine + y
      ) : type === "BUBBLE" ? (
        <Bubble />
      ) : (
        <Player />
      )}
    </div>
  );
};

export default Grid;
