import { WORDLE_COLORS } from "@/config/globalColors";

const WordBox = ({
  answer,
  guess,
  index,
  showAnswer = false,
}: {
  answer: string;
  guess: string;
  index: number;
  showAnswer?: boolean;
}) => {
  const getBgColor = () => {
    if (showAnswer) {
      if (answer.toLowerCase()[index] === guess.toLowerCase()) {
        return WORDLE_COLORS.CORRECT;
      }
      if (answer.toLowerCase().includes(guess.toLowerCase())) {
        return WORDLE_COLORS.PRESENT;
      }
      return WORDLE_COLORS.ABSENT;
    } else {
      return "transparent";
    }
  };
  const getBorder = () => {
    if (showAnswer) {
      if (answer.toLowerCase()[index] === guess.toLowerCase()) {
        return `2px solid ${WORDLE_COLORS.CORRECT}`;
      }
      if (answer.toLowerCase().includes(guess.toLowerCase())) {
        return `2px solid ${WORDLE_COLORS.PRESENT}`;
      }
      return `2px solid ${WORDLE_COLORS.ABSENT}`;
    } else {
      if (guess === "") {
        return "2px solid #d3d6da";
      } else {
        return "2px solid #878a8c";
      }
    }
  };
  const getTextColor = () => {
    if (showAnswer) {
      return WORDLE_COLORS.WHITE;
    } else {
      return WORDLE_COLORS.BLACK;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 58,
        height: 58,
        backgroundColor: getBgColor(),
        border: getBorder(),
        transition: "all ease .3s",
      }}
    >
      <span
        style={{
          fontFamily: "nyt-franklin",
          fontWeight: "bold",
          fontSize: "2rem",
          lineHeight: "58px",
          color: getTextColor(),
          transition: "all ease .3s",
        }}
      >
        {guess.toUpperCase()}
      </span>
    </div>
  );
};

export default WordBox;
