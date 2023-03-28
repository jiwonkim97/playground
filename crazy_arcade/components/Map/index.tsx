import Grid from "@/components/Grid";
import { atomGridGap, atomMap, atomMapWidth } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";

const Map = () => {
  const mapWidth = useRecoilValue(atomMapWidth);
  const gridGap = useRecoilValue(atomGridGap);
  const map = useRecoilValue(atomMap);

  return (
    <div
      style={{
        display: "flex",
        width: mapWidth,
        height: mapWidth,
        flexDirection: "column",
        gap: gridGap,
      }}
    >
      {map.map((col, colIdx) => {
        return (
          <div style={{ display: "flex", gap: gridGap }} key={colIdx}>
            {col.map((gridType, rowIdx) => (
              <Grid
                x={colIdx}
                y={rowIdx}
                key={`${colIdx} - ${rowIdx}`}
                type={gridType}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Map;
