export type TSuits = "spades" | "hearts" | "diamonds" | "clubs";
export type TRanks =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";

export type TCard = {
  suit: TSuits;
  rank: TRanks;
};
