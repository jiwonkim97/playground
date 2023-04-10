// const RadarChart = () => {
//   const WIDTH = 590;
//   const HALF_WIDTH = WIDTH / 2;
//   const POINTS = 5;
//   const ANGLE = 360 / POINTS;
//   const RADIAN = (ANGLE * Math.PI) / 180;

//   const RADIUS = HALF_WIDTH / Math.sin(RADIAN);
//   const HEIGHT = RADIUS + Math.cos(RADIAN) * RADIUS;
//   console.log(HEIGHT);
//   // console.log(WIDTH * )
//   return <div style={{ width: WIDTH, height: HEIGHT, backgroundColor: '#e3e' }}>RadarChart</div>;
// };
// export default RadarChart;
import React, { SVGProps } from 'react';

interface RegularPolygonProps extends SVGProps<SVGPolygonElement> {
  N?: number;
  WIDTH?: number;
}

const RegularPolygon: React.FC<RegularPolygonProps> = ({ N = 5, WIDTH = 590, ...props }) => {
  const points = (): string => {
    const r = WIDTH / 2;
    const angle = (2 * Math.PI) / N;
    let points = '';

    for (let i = 0; i < N; i++) {
      const x = r * Math.cos(i * angle);
      const y = r * Math.sin(i * angle);
      points += `${x},${y} `;
    }

    return points.trim();
  };

  return (
    <svg>
      <polygon points={points()} {...props} style={{ fill: 'transparent', stroke: 'Highlight' }} />
      <polygon points={points()} {...props} style={{ fill: 'transparent', stroke: 'Highlight' }} />
    </svg>
  );
};

export default RegularPolygon;
