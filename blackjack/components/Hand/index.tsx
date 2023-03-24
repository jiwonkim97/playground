import { TCard, TSuits } from "@/types/types";

const shapes: { [key in TSuits]: string } = {
  clubs: "♧",
  diamonds: "♢",
  hearts: "♡",
  spades: "♤",
};
// components/Hand.js
const Hand = ({ cards }: { cards: TCard[] }) => {
  return (
    <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {cards.map((card, i) => (
        <div
          style={{
            width: 30,
            height: 30,
            border: "2px solid",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          key={i}
        >
          <span>
            {card.rank}
            {shapes[card.suit]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Hand;
