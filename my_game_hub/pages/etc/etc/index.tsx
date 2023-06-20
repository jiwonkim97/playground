import AnimationButton from '@/components/Etc/AnimationButton';
import AnimationButtons from '@/components/Etc/AnimationButtons';
import Cursor from '@/components/Etc/CursorPointer';
import CustomMainPopup from '@/components/Etc/FigmaComponent';
import HamburgerBtn from '@/components/Etc/HamburgerBtn';
import ToggleButton from '@/components/Etc/ToggleButton';
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
      <ToggleButton />
      <div style={{ position: 'relative', width: 300, height: 150, display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingTop: 10 }}>
          <span style={{ fontWeight: 700, fontSize: '60px', mixBlendMode: 'difference' }}>TEXT</span>
        </div>
        <div style={{ flex: 1, backgroundColor: '#e3e', display: 'flex' }}>
          <div style={{ flex: 1, display: 'flex', backgroundColor: '#6BD1F4' }} />
          <div style={{ flex: 1, display: 'flex', backgroundColor: '#FF617D' }} />
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: '#89E144' }} />
      </div>

      <div style={{ width: '100%', padding: '0 16px', alignItems: 'center', display: 'flex' }}>
        <CustomMainPopup />
      </div>

      <div style={{ flexDirection: 'row', display: 'flex', gap: '20px' }}>
        <HamburgerBtn.Type1 />
        <HamburgerBtn.Type2 />
        <HamburgerBtn.Type3 />
        <HamburgerBtn.Type4 />
      </div>

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
