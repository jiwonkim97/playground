import Margin from '@/components/Global/Margin';
import { Rune } from '@/components/SWRuneChecker/Rune';
import RuneSelectButton from '@/components/SWRuneChecker/RuneSelectButton';
import RuneView from '@/components/SWRuneChecker/RuneView';
import { RUNE, RUNE_GRADE, RUNE_INDEX, RUNE_OPTIONS, RUNE_STAR, RUNE_UPGRADE } from '@/config/swConfig';
import { IRuneDetail, TRuneGrade, TRuneOption, TRuneStar, TRuneSubOptionDetail, TRuneType, TRuneUpgrade } from '@/types/summonersWarTypes';
import { getCookie, setCookie } from '@/utils/cookie';
import swUtils from '@/utils/swUtils';
import { useEffect, useState } from 'react';

const SWRuneChecker = () => {
  const [selectedRune, setSelectedRune] = useState<TRuneType | null>(null);
  const [selectedRuneNumber, setSelectedRuneNumber] = useState<1 | 2 | 3 | 4 | 5 | 6 | null>(null);
  const [runeGrade, setRuneGrade] = useState<TRuneGrade | null>(null);
  const [runeStar, setRuneStar] = useState<TRuneStar | null>(null);
  const [runeUpgrade, setRuneUpgrade] = useState<TRuneUpgrade | null>(null);
  const [runeMainOption, setRuneMainOption] = useState<TRuneOption | null>(null);
  const [runePreOptionType, setRunePreOptionType] = useState<TRuneOption | undefined>(undefined);
  const [runePreOptionValue, setRunePreOptionValue] = useState<number | undefined>(undefined);
  const [runeOptions, setRuneOptions] = useState<Array<TRuneSubOptionDetail>>([]);

  const [registeredRunes, setRegisteredRunes] = useState<Array<IRuneDetail>>([]);

  const onClickRune = (type: TRuneType) => {
    setSelectedRune(type);
    console.log(swUtils.getUsingMobType(type).join(','));
  };
  const onChangeRuneOption = (option: TRuneOption, value: number) => {
    setRuneOptions(cur => {
      if (cur.filter(i => i.optionName === option).length > 0) {
        let target = cur.filter(i => i.optionName === option)[0];
        const targetIdx = cur.indexOf(target);
        target.value = value;
        if (isNaN(value)) {
          return [...cur.slice(0, targetIdx), ...cur.slice(targetIdx + 1, cur.length)];
        }

        return [...cur.slice(0, targetIdx), target, ...cur.slice(targetIdx + 1, cur.length)];
      } else {
        return [...cur, { optionName: option, value: value }];
      }
    });
  };
  const onChangeRunePreOptionType = (option: TRuneOption | 'none') => {
    if (option === 'none') return;
    setRunePreOptionType(option);
  };

  const onClickRegister = () => {
    if (
      selectedRune !== null &&
      runeGrade !== null &&
      runeStar !== null &&
      selectedRuneNumber !== null &&
      runeUpgrade !== null &&
      runeMainOption !== null &&
      runeOptions !== null
    ) {
      let runePreOption = undefined;
      console.log(runePreOptionType, runePreOptionValue);
      if (runePreOptionType && runePreOptionValue) {
        runePreOption = {
          optionName: runePreOptionType,
          value: runePreOptionValue,
        };
      }

      const newRune = new Rune(selectedRune, runeGrade, runeStar, selectedRuneNumber, runeUpgrade, runeMainOption, runePreOption, runeOptions);

      setRegisteredRunes(cur => [...cur, newRune]);
    }
  };
  const onClickBackup = () => {
    setCookie('sw_rune', registeredRunes);
  };
  useEffect(() => {
    getCookie('sw_rune').then(res => (res ? setRegisteredRunes(res) : null));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>SWRuneChecker</h1>
      <Margin H={15} />
      <h2>공속 17이상, 한 수치 3회 이상 몰빵룬은 따로 걸러야 합니다</h2>
      <Margin H={30} />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 30 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 500 }}>
            {RUNE.map((item, idx) => (
              <RuneSelectButton data={item} onClick={() => onClickRune(item)} key={idx} isSelected={selectedRune === item} />
            ))}
          </div>
          {selectedRune ? (
            <div style={{ display: 'flex', width: '100%', padding: '0 16px', gap: 30, maxWidth: 500, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: '100%', maxWidth: 200, justifyContent: 'space-between' }}>
                <h3>룬 번호</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {RUNE_INDEX.map((item, idx) => {
                    return (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item}</span>
                        <Margin W={15} />
                        <input type='radio' style={{ width: 20, height: 20 }} name='rune_index' onClick={() => setSelectedRuneNumber(item)} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', maxWidth: 200, justifyContent: 'space-between' }}>
                <h3>룬 등급</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {RUNE_GRADE.map((item, idx) => {
                    return (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item}</span>
                        <Margin W={15} />
                        <input type='radio' style={{ width: 20, height: 20 }} name='rune_grade' onClick={() => setRuneGrade(item)} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', maxWidth: 200, justifyContent: 'space-between' }}>
                <h3>접두 옵션</h3>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', flexDirection: 'column', gap: 10 }}>
                  <select onChange={e => onChangeRunePreOptionType(e.target.value as TRuneOption)}>
                    <option value='none'>없음</option>
                    {RUNE_OPTIONS.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <input type='number' onChange={e => setRunePreOptionValue(parseInt(e.target.value))} style={{ display: 'flex', width: 100 }}></input>
                  {/* {RUNE_OPTIONS.map((item, idx) => {
                    return (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item}</span>
                        <Margin W={15} />
                        <input type='radio' style={{ width: 20, height: 20 }} name='rune_pre_option' onClick={() => setRunePreOption(item)} />
                      </div>
                    );
                  })} */}
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', maxWidth: 200, justifyContent: 'space-between' }}>
                <h3>주 옵션</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {RUNE_OPTIONS.map((item, idx) => {
                    return (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item}</span>
                        <Margin W={15} />
                        <input type='radio' style={{ width: 20, height: 20 }} name='rune_main_option' onClick={() => setRuneMainOption(item)} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', maxWidth: 200, justifyContent: 'space-between' }}>
                <h3>강화도</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {RUNE_UPGRADE.map((item, idx) => {
                    return (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item}</span>
                        <Margin W={15} />
                        <input type='radio' style={{ width: 20, height: 20 }} name='rune_upgrade' onClick={() => setRuneUpgrade(item)} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ display: 'flex', width: '100%', maxWidth: 200, justifyContent: 'space-between' }}>
                <h3>별 갯수</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {RUNE_STAR.map((item, idx) => {
                    return (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item}</span>
                        <Margin W={15} />
                        <input type='radio' style={{ width: 20, height: 20 }} name='rune_star' onClick={() => setRuneStar(item)} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
          {runeGrade && runeStar && runeUpgrade !== null ? (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {RUNE_OPTIONS.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: 100 }}>{item}</div>
                    <input type='number' onChange={e => onChangeRuneOption(item, parseInt(e.target.value))}></input>
                  </div>
                ))}
              </div>
              <Margin H={30} />
              <button
                disabled={!(selectedRune !== null && selectedRuneNumber !== null && runeGrade !== null && runeStar !== null && runeUpgrade !== null)}
                onClick={onClickRegister}>
                추가
              </button>
              <Margin H={30} />
              <button
                disabled={!(selectedRune !== null && selectedRuneNumber !== null && runeGrade !== null && runeStar !== null && runeUpgrade !== null)}
                onClick={onClickBackup}>
                쿠키에 백업하기
              </button>
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {registeredRunes.map((item, idx) => {
            return <RuneView key={idx} onClick={() => console.log(item)} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SWRuneChecker;
