import { atomGridSize } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";

const Bubble = () => {
  const gridSize = useRecoilValue(atomGridSize);

  return (
    <div
      style={{
        display: "flex",
        width: gridSize * 0.8,
        height: gridSize * 0.8,
        borderRadius: (gridSize * 0.8) / 2,
        backgroundColor: "skyblue",
      }}
    ></div>
  );
};

export default Bubble;
