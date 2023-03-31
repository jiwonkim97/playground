interface MarginProps {
  W?: number;
  H?: number;
}
const Margin = ({ W = 0, H = 0 }: MarginProps) => {
  return <div style={{ width: W, minWidth: W, height: H, minHeight: H }} />;
};

export default Margin;
