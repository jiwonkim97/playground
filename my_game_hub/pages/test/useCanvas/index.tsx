import StageLightingWaveAnimation from '@/components/StageLightingWaveAnimation';
import { useClientWidthHeight } from '@/hooks/useClientWIdthHeight';
import { RefObject, useRef } from 'react';

const UseCanvasExample = () => {
  const mainRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const { width: canvasWidth, height: canvasHeight } = useClientWidthHeight(mainRef);
  return (
    <div style={{ display: 'flex', flex: 1, width: '100%' }} ref={mainRef}>
      <StageLightingWaveAnimation canvasWidth={canvasWidth} canvasHeight={canvasHeight} />
    </div>
  );
};

export default UseCanvasExample;
