const RadarChart = () => {
  const WIDTH = 590;
  const HALF_WIDTH = WIDTH / 2;
  const POINTS = 5;
  const ANGLE = (Math.PI * 2) / POINTS;

  const RADIUS = HALF_WIDTH / Math.sin(ANGLE);
  const HEIGHT = RADIUS + Math.cos(ANGLE) * RADIUS;
  console.log(HEIGHT);
  // console.log(WIDTH * )
  return <div style={{ width: WIDTH, height: HEIGHT, backgroundColor: '#e3e' }}>RadarChart</div>;
};
export default RadarChart;
