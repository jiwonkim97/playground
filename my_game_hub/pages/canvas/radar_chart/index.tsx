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

import { useEffect, useRef } from 'react';

interface RegularPolygonProps {
  N: number;
  width?: number;
  height?: number;
}

function RegularPolygon({ N = 5, width = 1000, height = 1000 }: RegularPolygonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = Math.min(width, height);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;

    ctx.scale(dpr, dpr);

    // 중심점 좌표 계산
    const center = {
      x: width / 2,
      y: height / 2 + Math.min(width, height) / 2 - Math.min(width, height) / (2 * N),
    };

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    const angle = (2 * Math.PI) / N;
    const radius = Math.min(width, height) / 2 - 10;

    for (let i = 0; i < N; i++) {
      const x = center.x + radius * Math.cos(i * angle - Math.PI / 2);
      const y = center.y + radius * Math.sin(i * angle - Math.PI / 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.stroke();

    const image = imageRef.current;
    if (!image) return;
    ctx.drawImage(image, 0, 0);
  }, [N]);

  return (
    <canvas
      ref={canvasRef}
      width={300} // canvas의 너비
      height={300} // canvas의 높이
    />
  );
}

export default RegularPolygon;
