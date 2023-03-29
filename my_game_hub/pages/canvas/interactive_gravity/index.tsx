import { useClientWidthHeight } from '@/hooks/useClientWIdthHeight';
import { RefObject, useRef } from 'react';

const InteractiveGravity = () => {
  const mainRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const { width: canvasWidth, height: canvasHeight } = useClientWidthHeight(mainRef);
  return <div style={{ display: 'flex', flex: 1, width: '100%' }} ref={mainRef}></div>;
};

export default InteractiveGravity;
