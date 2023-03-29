import { RefObject, useEffect, useRef } from 'react';

export const useCanvas = (canvasWidth: number, canvasHeight: number, animate: (ctx: CanvasRenderingContext2D) => void) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const setCanvas = () => {
      /**
       * 레티나 디스플레이 같은 고해상도 디스플레이 지원을 위함
       */
      const devicePixelRatio = window.devicePixelRatio ?? 1;

      if (canvas && ctx) {
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    setCanvas();

    let requestId: number;
    const requestAnimation = () => {
      requestId = window.requestAnimationFrame(requestAnimation);

      if (ctx) {
        animate(ctx);
      }
    };
    requestAnimation();

    return () => window.cancelAnimationFrame(requestId);
  }, [canvasWidth, canvasHeight, animate]);

  return canvasRef;
};
