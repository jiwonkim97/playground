import { TCard, TRanks, TSuits } from "@/types/types";

// components/Deck.js
class Deck {
  cards: TCard[];

  constructor() {
    this.cards = [];
    this.reset();
  }

  reset() {
    this.cards = [];
    const suits: TSuits[] = ["spades", "hearts", "diamonds", "clubs"];
    const ranks: TRanks[] = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push({ suit, rank });
      }
    }
    this.shuffle();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawCard() {
    return this.cards.pop();
  }
}

export default Deck;
