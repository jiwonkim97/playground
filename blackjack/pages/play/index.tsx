// pages/play.js
import Deck from "@/components/Deck";
import Hand from "@/components/Hand";
import { TCard, TRanks } from "@/types/types";
import { useEffect, useState } from "react";

const PlayPage = () => {
  const [deck, setDeck] = useState(new Deck());
  const [playerHand, setPlayerHand] = useState<TCard[]>([]);
  const [playerSum, setPlayerSum] = useState<number>(0);
  const [dealerHand, setDealerHand] = useState<TCard[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const getRankPoint = (item: TRanks) => {
    switch (item) {
      case "2":
        return 2;
      case "3":
        return 3;
      case "4":
        return 4;
      case "5":
        return 5;
      case "6":
        return 6;
      case "7":
        return 7;
      case "8":
        return 8;
      case "9":
        return 9;
      case "10":
        return 10;
      case "J":
        return 10;
      case "Q":
        return 10;
      case "K":
        return 10;
      case "A":
        return 1;
    }
  };

  const handleHit = () => {
    // Implement player hit logic
    const card = deck.drawCard();
    if (card) {
      setPlayerHand((cur) => [...cur, card]);
    } else {
      deck.reset();
      handleHit();
    }
  };

  const handleStand = () => {
    // Implement dealer hit logic and calculate results
  };

  const handleReplay = () => {
    deck.reset();
  };

  useEffect(() => {
    // check player Hand
    const sum = playerHand.reduce(
      (prev, cur) => prev + getRankPoint(cur.rank),
      0
    );
    setPlayerSum(sum);
    if (sum > 21) {
      setStatusMessage("BURST!");
    }
  }, [playerHand]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Game Play</h1>
      <h2>{statusMessage}</h2>
      <div
        style={{
          maxWidth: 466,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        <Hand cards={dealerHand} />
        <div style={{ display: "flex" }}>
          <Hand cards={playerHand} />
          <span>{playerSum}</span>
        </div>
      </div>
      <div style={{ height: 30, minHeight: 30 }} />
      <div style={{ display: "flex", gap: 30 }}>
        <button onClick={handleHit}>Hit</button>
        <button onClick={handleStand}>Stand</button>
        <button onClick={handleStand}>Replay</button>
      </div>
    </div>
  );
};

export default PlayPage;
