import { colors } from "@/config/globalColors";
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
        return colors.CORRECT;
      case "PRESENT":
        return colors.PRESENT;
      case "ABSENT":
        return colors.ABSENT;
      case "NONE":
        return colors.GRAY4;
    }
  };
  const getTextColor = () => {
    switch (status) {
      case "CORRECT":
        return colors.WHITE;
      case "PRESENT":
        return colors.WHITE;
      case "ABSENT":
        return colors.WHITE;
      case "NONE":
        return colors.BLACK;
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
