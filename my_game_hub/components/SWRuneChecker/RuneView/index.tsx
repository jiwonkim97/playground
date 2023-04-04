import Margin from '@/components/Global/Margin';
import { IRuneDetail, TMobPosition } from '@/types/summonersWarTypes';
import swUtils from '@/utils/swUtils';
import { MouseEvent, MouseEventHandler, useState } from 'react';

const RuneView = ({ data, onClick, onClickDelete }: { data: IRuneDetail; onClick: MouseEventHandler<HTMLDivElement>; onClickDelete: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const { position, score } = swUtils.getRuneScore(data);
  const score = swUtils.getRuneScore(data)
  const onClickDiv = (e: MouseEvent<HTMLDivElement>) => {
    setIsOpen(cur => !cur);
    onClick(e);
  };
  return (
    <div onClick={onClickDiv} style={{ outline: 'solid 1px #000', display: 'flex', flexDirection: 'column', maxWidth: 300, width: '100%', padding: 5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {`${data.type}(${data.index}) ${data.grade}`}
        <Margin W={5} />
        {
          Object.entries(score).map((item, idx) => {
            return (
              <div key={idx} style={{backgroundColor: swUtils.getUsingMobType(data?.type).includes(item[0] as TMobPosition) ? '#fcc' : '#fff'}}>
                <span>
                  {item[0]}
                </span>
                <span>
                  {item[1].toFixed(2)}
                </span>
                <Margin W={5} />
                </div>
            )
          })
        }
        {/* {position} */}
        {/* {score} */}
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
        <button onClick={() => onClickDelete(data?.uuid)} style={{ color: '#f00', height: 20 }}>
          제거
        </button>
      </div>
    </div>
  );
};

export default RuneView;
