import { ILightSource, LightSource } from '@/components/StageLightingWaveAnimation/LightSource';
import { IPoint, Point } from '@/components/StageLightingWaveAnimation/Point';
import { useCanvas } from '@/hooks/useCanvas';
import { RefObject } from 'react';

type StageLightingWaveAnimationProps = {
  canvasWidth: number;
  canvasHeight: number;
};

const StageLightingWaveAnimation = ({ canvasWidth, canvasHeight }: StageLightingWaveAnimationProps) => {
  const fillBackground = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgb(31, 31, 36)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  const lightSource: ILightSource = new LightSource(canvasWidth, canvasHeight);

  let points: IPoint[] = [];
  const initPoints = () => {
    const POINT_NUMBER = 72;
    const POINT_GAP = canvasWidth / POINT_NUMBER;

    for (let i = 0; i <= POINT_NUMBER; i++) {
      const point: IPoint = new Point(POINT_GAP, i, canvasWidth, canvasHeight);
      points.push(point);
    }
  };
  if (canvasWidth !== 0 && canvasHeight !== 0) {
    initPoints();
  }

  const animate = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    fillBackground(ctx);
    lightSource.drawRadialGradientBehindLightSource(ctx);
    lightSource.drawLightSource(ctx);

    for (let i = 0; i < points.length; i++) {
      lightSource.drawLightLines(ctx, points[i].pointCenterX, points[i].pointCenterY);
      points[i].animate(ctx);
    }
  };

  const canvasRef: RefObject<HTMLCanvasElement> = useCanvas(canvasWidth, canvasHeight, animate);

  return <canvas ref={canvasRef} />;
};
export default StageLightingWaveAnimation;
