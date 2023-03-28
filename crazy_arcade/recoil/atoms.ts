import { atom, selector } from "recoil";
import { v1 } from "uuid";

export const atomGridSize = atom<number>({
  key: `atom_map_size${v1()}`,
  default: 50,
});

export const atomNumPerLine = atom<number>({
  key: `atom_num_per_line${v1()}`,
  default: 8,
});

export const atomGridGap = atom<number>({
  key: `atom_grid_gap${v1()}`,
  default: 3,
});

export const atomMapWidth = selector<number>({
  key: `atom_map_width${v1()}`,
  get: ({ get }) => {
    const gridSize = get(atomGridSize);
    const numPerLine = get(atomNumPerLine);
    const gridGap = get(atomGridGap);

    return gridSize * numPerLine + (numPerLine - 1) * gridGap;
  },
});

export type TPosition = {
  x: number;
  y: number;
};

export const atomBubblePositions = atom<TPosition[]>({
  key: `atom_bubble_positions${v1()}`,
  default: [],
});

export const atomPlayerPosition = atom<TPosition>({
  key: `atom_player_position${v1()}`,
  default: { x: 0, y: 0 },
});

export type TGridType = "" | "BUBBLE" | "PLAYER";

export const atomMap = selector<TGridType[][]>({
  key: `atom_map${v1()}`,
  get: ({ get }) => {
    const numPerLine = get(atomNumPerLine);
    const bubblePositions = get(atomBubblePositions);
    const playerPosition = get(atomPlayerPosition);

    let ret: TGridType[][] = Array.from<TGridType, TGridType[]>(
      { length: numPerLine },
      () => Array.from<TGridType>({ length: numPerLine }).fill("")
    );

    bubblePositions.forEach((item) => (ret[item.x][item.y] = "BUBBLE"));
    ret[playerPosition.x][playerPosition.y] = "PLAYER";

    return ret;
  },
});
