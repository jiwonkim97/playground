import Margin from '@/components/Global/Margin';
import { IRuneDetail } from '@/types/summonersWarTypes';
import swUtils from '@/utils/swUtils';
import { MouseEvent, MouseEventHandler, useState } from 'react';

const RuneView = ({ data, onClick }: { data: IRuneDetail; onClick: MouseEventHandler<HTMLDivElement> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { position, score } = swUtils.getRuneScore(data);
  const onClickDiv = (e: MouseEvent<HTMLDivElement>) => {
    setIsOpen(cur => !cur);
    onClick(e);
  };
  const onClickDelete = () => {};
  return (
    <div onClick={onClickDiv} style={{ outline: 'solid 1px #000', display: 'flex', flexDirection: 'column', maxWidth: 300, width: '100%', padding: 5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {`${data.type}(${data.index}) ${data.grade}`}
        <Margin W={5} />
        {position}
        {score}
      </div>
      <div style={{ display: isOpen ? 'flex' : 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'space-between' }}>
          <Margin H={10} />

          {data?.preOption ? (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{data?.preOption.optionName}</span>
              <span>{data?.preOption.value}</span>
            </div>
          ) : null}
          <Margin H={10} />
          {data.subOption?.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.optionName}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <Margin H={10} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={onClickDelete} style={{ color: '#f00', height: 20 }}>
          제거
        </button>
      </div>
    </div>
  );
};

export default RuneView;
