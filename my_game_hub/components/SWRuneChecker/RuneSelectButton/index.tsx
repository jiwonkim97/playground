import { TRuneType } from '@/types/summonersWarTypes';
import swUtils from '@/utils/swUtils';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';

const RuneSelectButton = ({ onClick, data, isSelected }: { onClick: MouseEventHandler<HTMLDivElement>; data: TRuneType; isSelected: boolean }) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };
  const onTouchStart = () => {
    setIsHover(true);
  };
  const onTouchEnd = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        outline: 'solid 1px #3ee',
        width: 55,
        height: 55,
        cursor: 'pointer',
        borderRadius: 5,
        position: 'relative',
      }}
      onClick={onClick}>
      {isHover || isSelected ? (
        <div id='deem' style={{ position: 'absolute', top: 0, backgroundColor: 'rgb(0,0,0,0.2)', zIndex: 5, width: '100%', height: '100%', borderRadius: 5 }} />
      ) : null}
      <Image src={swUtils.getRuneImage(data)} alt={`${data}룬 이미지`} width={36} height={36} />
      <span>{data}</span>
    </div>
  );
};

export default RuneSelectButton;
