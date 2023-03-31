import { RUNE_OPTION_MAX_VALUE, VALID_OPTION_BY_MOB_POSITION } from '@/config/swConfig';
import 격노룬 from '@/public/asset/sw/격노룬.webp';
import 결의룬 from '@/public/asset/sw/결의룬.webp';
import 고양룬 from '@/public/asset/sw/고양룬.webp';
import 근성룬 from '@/public/asset/sw/근성룬.webp';
import 맹공룬 from '@/public/asset/sw/맹공룬.webp';
import 명중룬 from '@/public/asset/sw/명중룬.webp';
import 반격룬 from '@/public/asset/sw/반격룬.webp';
import 보호룬 from '@/public/asset/sw/보호룬.webp';
import 수호룬 from '@/public/asset/sw/수호룬.webp';
import 신속룬 from '@/public/asset/sw/신속룬.webp';
import 응보룬 from '@/public/asset/sw/응보룬.webp';
import 의지룬 from '@/public/asset/sw/의지룬.webp';
import 인내룬 from '@/public/asset/sw/인내룬.webp';
import 절망룬 from '@/public/asset/sw/절망룬.webp';
import 집중룬 from '@/public/asset/sw/집중룬.webp';
import 칼날룬 from '@/public/asset/sw/칼날룬.webp';
import 투지룬 from '@/public/asset/sw/투지룬.webp';
import 파괴룬 from '@/public/asset/sw/파괴룬.webp';
import 폭주룬 from '@/public/asset/sw/폭주룬.webp';
import 활력룬 from '@/public/asset/sw/활력룬.webp';
import 흡혈룬 from '@/public/asset/sw/흡혈룬.webp';
import { IRuneDetail, TMobPosition, TRuneType } from '@/types/summonersWarTypes';

const getRuneImage = (type: TRuneType) => {
  switch (type) {
    case '활력':
      return 활력룬;
    case '수호':
      return 수호룬;
    case '신속':
      return 신속룬;
    case '칼날':
      return 칼날룬;
    case '격노':
      return 격노룬;
    case '집중':
      return 집중룬;
    case '인내':
      return 인내룬;
    case '맹공':
      return 맹공룬;
    case '절망':
      return 절망룬;
    case '흡혈':
      return 흡혈룬;
    case '폭주':
      return 폭주룬;
    case '응보':
      return 응보룬;
    case '의지':
      return 의지룬;
    case '보호':
      return 보호룬;
    case '반격':
      return 반격룬;
    case '파괴':
      return 파괴룬;
    case '투지':
      return 투지룬;
    case '결의':
      return 결의룬;
    case '고양':
      return 고양룬;
    case '명중':
      return 명중룬;
    case '근성':
      return 근성룬;
  }
};
const getUsingMobType: (arg1: TRuneType) => Array<TMobPosition> = (runeType: TRuneType) => {
  switch (runeType) {
    case '활력':
      return ['탱커'];
    case '수호':
      return [];
    case '신속':
      return ['딜러', '탱커', '서포터'];
    case '칼날':
      return ['딜러'];
    case '격노':
      return ['딜러'];
    case '집중':
      return [];
    case '인내':
      return [];
    case '맹공':
      return ['딜러'];
    case '절망':
      return [];
    case '흡혈':
      return ['딜러'];
    case '폭주':
      return ['딜러', '탱커', '서포터'];
    case '응보':
      return ['탱커'];
    case '의지':
      return ['딜러', '탱커', '서포터'];
    case '보호':
      return ['서포터'];
    case '반격':
      return [];
    case '파괴':
      return ['딜러', '탱커'];
    case '투지':
      return [];
    case '결의':
      return [];
    case '고양':
      return [];
    case '명중':
      return [];
    case '근성':
      return [];
  }
};

/**
 * 거인의 던전 : 절망, 활력, 맹공, 칼날, 신속
 * 용의 던전 : 폭주, 집중, 수호, 인내, 보호, 반격
 * 죽음의 던전 : 격노, 의지, 응보, 흡혈, 파괴
 * 이계 던전 : 투지, 결의, 고양, 명중, 근성
 */

/**
 * 체력%
 * 공격력%
 * 방어력%
 * 효과 적중
 * 효과 저항
 * 기존룬 4%~8%
 * 고대룬 6%~10%
 * 공격속도
 * 치명 확률
 * 기존룬 4(%)~6(%)
 * 고대룬 5(%)~7(%)
 * 치명 피해
 * 기존룬 4%~7%
 * 고대룬 5%~8%
 */

const getRuneScore = (rune: IRuneDetail) => {
  let score: { [key in TMobPosition]: number } = {
    딜러: 0,
    탱커: 0,
    서포터: 0,
  };

  //*****************************************************************************/
  /**
   * 전설룬 보너스
   */
  const legendaryGradeBonus = 1;
  /**
   * 폭,의,신 보너스
   */
  const specialRuneTypeBonus = 1;

  let bonusScore = 0;

  if (rune.grade === '전설') {
    bonusScore += legendaryGradeBonus;
  }

  if (rune.type === '폭주' || rune.type === '의지' || rune.type === '신속') {
    bonusScore += specialRuneTypeBonus;
  }

  //*****************************************************************************/
  /** 포지션별 점수 매기기 */
  const MAIN_OPTION_WEIGHT = 1;
  const SUB_OPTION_WEIGHT = 0.9;
  const positions: Array<TMobPosition> = ['딜러', '탱커', '서포터'];

  positions.map(position => {
    VALID_OPTION_BY_MOB_POSITION[position].main.map(validOption => {
      if (!rune.subOption) return;

      const filteredOption = rune.subOption?.filter(item => item.optionName === validOption);
      if (filteredOption.length > 0) {
        score[position] += (filteredOption[0].value / RUNE_OPTION_MAX_VALUE[validOption]) * MAIN_OPTION_WEIGHT;
      }
    });

    VALID_OPTION_BY_MOB_POSITION[position].sub.map(validOption => {
      if (!rune.subOption) return;

      const filteredOption = rune.subOption?.filter(item => item.optionName === validOption);
      if (filteredOption.length > 0) {
        score[position] += (filteredOption[0].value / RUNE_OPTION_MAX_VALUE[validOption]) * SUB_OPTION_WEIGHT;
      }
    });
  });

  const ret = Object.entries(score).sort((a, b) => b[1] - a[1])[0];

  return { position: ret[0], score: (ret[1] + bonusScore).toFixed(3) };
};

const getRuneEffect = (type: TRuneType) => {
  switch (type) {
    case '활력':
      return '';
    case '수호':
      return '';
    case '신속':
      return '';
    case '칼날':
      return '';
    case '격노':
      return '';
    case '집중':
      return '';
    case '인내':
      return '';
    case '맹공':
      return '';
    case '절망':
      return '';
    case '흡혈':
      return '';
    case '폭주':
      return '';
    case '응보':
      return '';
    case '의지':
      return '';
    case '보호':
      return '';
    case '반격':
      return '';
    case '파괴':
      return '';
    case '투지':
      return '';
    case '결의':
      return '';
    case '고양':
      return '';
    case '명중':
      return '';
    case '근성':
      return '';
  }
};
export default { getRuneImage, getUsingMobType, getRuneScore, getRuneEffect };
