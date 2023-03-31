import { TMobPosition, TRuneGrade, TRuneIndex, TRuneOption, TRuneStar, TRuneType, TRuneUpgrade } from '@/types/summonersWarTypes';

export const SW_MAIN_RUNE_MIN_SCORE = 30;
export const SW_SUB_RUNE_MIN_SCORE = SW_MAIN_RUNE_MIN_SCORE * 1.2;
export const RUNE: Array<TRuneType> = [
  '활력',
  '수호',
  '신속',
  '칼날',
  '격노',
  '집중',
  '인내',
  '맹공',
  '절망',
  '흡혈',
  '폭주',
  '응보',
  '의지',
  '보호',
  '반격',
  '파괴',
  '투지',
  '결의',
  '고양',
  '명중',
  '근성',
];
export const RUNE_OPTIONS: Array<TRuneOption> = [
  '체력%',
  '체력',
  '공격력%',
  '공격력',
  '방어력%',
  '방어력',
  '효과 적중',
  '효과 저항',
  '공격속도',
  '치명 확률',
  '치명 피해',
];
export const RUNE_GRADE: Array<TRuneGrade> = ['일반', '마법', '희귀', '영웅', '전설'];
export const RUNE_STAR: Array<TRuneStar> = [1, 2, 3, 4, 5, 6];
export const RUNE_UPGRADE: Array<TRuneUpgrade> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
export const RUNE_INDEX: Array<TRuneIndex> = [1, 2, 3, 4, 5, 6];
export const VALID_OPTION_BY_MOB_POSITION: { [key in TMobPosition]: { main: Array<TRuneOption>; sub: Array<TRuneOption> } } = {
  딜러: { main: ['공격력%', '공격속도', '치명 확률', '치명 피해'], sub: ['체력%', '방어력%'] },
  탱커: { main: ['체력%', '방어력%', '공격속도'], sub: ['효과 저항'] },
  서포터: { main: ['체력%', '방어력%', '공격속도', '효과 저항'], sub: ['효과 적중'] },
};
export const RUNE_OPTION_MAX_VALUE: { [key in TRuneOption]: number } = {
  '공격력%': 8,
  '방어력%': 8,
  '체력%': 8,
  '치명 피해': 7,
  '치명 확률': 6,
  '효과 저항': 8,
  '효과 적중': 8,
  공격속도: 6,
  공격력: 999,
  방어력: 999,
  체력: 999,
};
