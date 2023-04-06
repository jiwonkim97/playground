import AnimationButton from '@/components/Etc/AnimationButton1';
import AnimationButtons from '@/components/Etc/AnimationButtons';
import Cursor from '@/components/Etc/CursorPointer';
import { MouseEvent, useState } from 'react';

const EtcEtc = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const onClickButton = () => {
    console.log('click');
  };

  return (
    <div
      style={{ display: 'flex', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative', flexDirection: 'column' }}
      onMouseMove={handleMouseMove}>
      <AnimationButton onClick={onClickButton} />
      <AnimationButtons.Type1 />
      <div className='frame'>
        <button className='custom-btn btn-1'>Read More</button>
        <button className='custom-btn btn-2'>Read More</button>
        <button className='custom-btn btn-3'>
          <span>Read More</span>
        </button>
        <button className='custom-btn btn-4'>
          <span>Read More</span>
        </button>
        <button className='custom-btn btn-5'>
          <span>Read More</span>
        </button>
        <button className='custom-btn btn-6'>
          <span>Read More</span>
        </button>
        <button className='custom-btn btn-7'>
          <span>Read More</span>
        </button>
        <button className='custom-btn btn-8'>
          <span>Read More</span>
        </button>
        <button className='custom-btn btn-9'>Read More</button>
        <button className='custom-btn btn-10'>Read More</button>
        <button className='custom-btn btn-11'>
          Read More<div className='dot'></div>
        </button>
        <button className='custom-btn btn-12'>
          <span>Click!</span>
          <span>Read More</span>
        </button>
        <button className='custom-btn btn-13'>Read More</button>
        <button className='custom-btn btn-14'>Read More</button>
        <button className='custom-btn btn-15'>Read More</button>
        <button className='custom-btn btn-16'>Read More</button>
      </div>
      <Cursor x={x} y={y} />
    </div>
  );
};

export default EtcEtc;
