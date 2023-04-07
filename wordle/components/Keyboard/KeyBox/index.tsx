import { WORDLE_COLORS } from "@/config/globalColors";
import { TKeyboard } from "@/types/publicTypes";

const KeyBox = ({
  word,
  status,
  onClick,
}: {
  word: TKeyboard;
  status: "CORRECT" | "PRESENT" | "ABSENT" | "NONE";
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const getBgColor = () => {
    switch (status) {
      case "CORRECT":
        return WORDLE_COLORS.CORRECT;
      case "PRESENT":
        return WORDLE_COLORS.PRESENT;
      case "ABSENT":
        return WORDLE_COLORS.ABSENT;
      case "NONE":
        return WORDLE_COLORS.GRAY4;
    }
  };
  const getTextColor = () => {
    switch (status) {
      case "CORRECT":
        return WORDLE_COLORS.WHITE;
      case "PRESENT":
        return WORDLE_COLORS.WHITE;
      case "ABSENT":
        return WORDLE_COLORS.WHITE;
      case "NONE":
        return WORDLE_COLORS.BLACK;
    }
  };
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: word === "BS" || word === "ENT" ? 1.5 : 1,
        height: 58,
        backgroundColor: getBgColor(),
        borderRadius: 4,
        cursor: "pointer",
        transition: "all ease .3s",
      }}
    >
      <span
        style={{
          fontFamily: "nyt-franklin",
          fontWeight: "bold",
          fontSize: "1.25rem",
          color: getTextColor(),
          transition: "all ease .3s",
        }}
      >
        {word.toUpperCase()}
      </span>
    </div>
  );
};
export default KeyBox;
