// pages/play.js
import Deck from "@/components/Deck";
import Hand from "@/components/Hand";
import { TCard, TRanks } from "@/types/types";
import { useEffect, useState } from "react";

const PlayPage = () => {
  const [deck, setDeck] = useState(new Deck());
  const [playerHand, setPlayerHand] = useState<TCard[]>([]);
  const [playerSum, setPlayerSum] = useState<number[]>([0, 0]);
  const [dealerHand, setDealerHand] = useState<TCard[]>([]);
  const [dealerSum, setDealerSum] = useState<number[]>([0, 0]);
  const [isPressedStand, setIsPressedStand] = useState(false);
  const [statusMessage, setStatusMessage] = useState<
    "BURST!" | "BLACK JACK!" | "PLAYER WIN!" | "DEALER WIN!" | ""
  >("");

  const getRankPoint = (item: TRanks) => {
    switch (item) {
      case "2":
        return [2];
      case "3":
        return [3];
      case "4":
        return [4];
      case "5":
        return [5];
      case "6":
        return [6];
      case "7":
        return [7];
      case "8":
        return [8];
      case "9":
        return [9];
      case "10":
        return [10];
      case "J":
        return [10];
      case "Q":
        return [10];
      case "K":
        return [10];
      case "A":
        return [1, 11];
    }
  };

  const handleHit = async (execute: boolean = false) => {
    if (statusMessage !== "" && execute === false) return;
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
    if (statusMessage !== "" || !isPressedStand) return;
    // Implement dealer hit logic and calculate results
    const card = deck.drawCard();
    if (card) {
      setDealerHand((cur) => [...cur, card]);
    } else {
      deck.reset();
      handleStand();
    }
  };

  const handleReplay = () => {
    deck.reset();
    setDealerHand([]);
    setPlayerHand([]);
    setStatusMessage("");
    handleHit(true);
    handleHit(true);
  };

  useEffect(() => {
    //check dealer's hand
    const sum = dealerHand.reduce(
      (prev, cur) => [
        prev[0] + getRankPoint(cur.rank)[0],
        prev[1] + (getRankPoint(cur.rank)[1] ?? getRankPoint(cur.rank)[0]),
      ],
      [0, 0]
    );
    setDealerSum(sum);

    // 딜러의 블랙잭
    // 딜러의 카드합이 17 이상 -> 멈추고 플레이어와 비교
    // 딜러의 버스트
    // 딜러의 카드합이 17 미만 -> 계속 stand
  }, [dealerHand]);

  useEffect(() => {
    // check player's Hand
    if (playerHand.length < 2) {
      //게임 시작 시
      handleHit();
    }
    const sum = playerHand.reduce(
      (prev, cur) => [
        prev[0] + getRankPoint(cur.rank)[0],
        prev[1] + (getRankPoint(cur.rank)[1] ?? getRankPoint(cur.rank)[0]),
      ],
      [0, 0]
    );
    setPlayerSum(sum);
    if (sum[0] > 21 && sum[1] > 21) {
      setStatusMessage("BURST!");
    }
    if (playerHand.length === 2 && sum.includes(21)) {
      setStatusMessage("BLACK JACK!");
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Hand cards={dealerHand} />
          <span>
            {dealerSum[0] === dealerSum[1] || dealerSum[1] > 21
              ? dealerSum[0]
              : dealerSum[1] === 21
              ? dealerSum[1]
              : dealerSum.join(" / ")}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Hand cards={playerHand} />
          <span>
            {playerSum[0] === playerSum[1] || playerSum[1] > 21
              ? playerSum[0]
              : playerSum[1] === 21
              ? playerSum[1]
              : playerSum.join(" / ")}
          </span>
        </div>
      </div>
      <div style={{ height: 30, minHeight: 30 }} />
      <div style={{ display: "flex", gap: 30 }}>
        <button onClick={() => handleHit()}>Hit</button>
        <button onClick={handleStand}>Stand</button>
        <button onClick={handleReplay}>Replay</button>
      </div>
    </div>
  );
};

export default PlayPage;
