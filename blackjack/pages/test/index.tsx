import Deck from "@/components/Deck";
import { TSuits } from "@/types/types";
import { useEffect, useState } from "react";
const shapes: { [key in TSuits]: string } = {
  clubs: "♧",
  diamonds: "♢",
  hearts: "♡",
  spades: "♤",
};
const Test = () => {
  const [deck, setDeck] = useState(new Deck());
  const [percentage, setPercentage] = useState(-1);
  useEffect(() => {
    setTimeout(
      () =>
        setPercentage((cur) => {
          let val = cur - 0.1;
          if (val < -100) {
            return 0;
          } else {
            return val;
          }
        }),
      10
    );
  }, [percentage]);

  return (
    <div>
      Test
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            width: "100%",
            gap: 3,
          }}
        >
          {[deck, deck].map((item, idx) => (
            <div
              key={idx}
              style={{
                transform: `translate(${percentage}%, 0%)`,
                display: "flex",
                gap: 3,
              }}
            >
              {item.cards.map((itemm, idx) => (
                <div
                  key={itemm.rank + itemm.suit + idx}
                  style={{
                    display: "flex",
                    width: 50,
                    height: 75,
                    border: "solid 1px #000000",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span>{itemm.rank + shapes[itemm.suit]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
