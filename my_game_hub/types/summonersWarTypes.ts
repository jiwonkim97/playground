/**
 * 룬세트 종류
 */
export type TRuneType =
  | '활력'
  | '수호'
  | '신속'
  | '칼날'
  | '격노'
  | '집중'
  | '인내'
  | '맹공'
  | '절망'
  | '흡혈'
  | '폭주'
  | '응보'
  | '의지'
  | '보호'
  | '반격'
  | '파괴'
  | '투지'
  | '결의'
  | '고양'
  | '명중'
  | '근성';

/**
 * 부옵션 종류
 */
export type TRuneOption = '체력%' | '체력' | '공격력%' | '공격력' | '방어력%' | '방어력' | '효과 적중' | '효과 저항' | '공격속도' | '치명 확률' | '치명 피해';

/**
 * 접두옵션 종류
 */
export type TRunePreOption = '강인한' | '근성있는' | '맹렬한' | '힘있는' | '튼튼한' | '견고한' | '재빠른' | '치명적인' | '잔혹한' | '저항하는' | '정교한';

/**
 * 강인한
 * 체력
 * 근성있는
 * 체력%
 * 맹렬한
 * 공격력
 * 힘있는
 * 공격력%
 * 튼튼한
 * 방어력
 * 견고한
 * 방어력%
 * 재빠른
 * 공격속도
 * 치명적인
 * 치명 확률%
 * 잔혹한
 * 치명 피해%
 * 저항하는
 * 효과 저항%
 * 정교한
 * 효과 적중%
 */

/**
 * 옵션 상세 정보
 */
export type TRuneOptionDetail = {
  optionName: TRuneOption;
  value: number;
};
/**
 * 부옵션 상세 정보
 */
export type TRuneSubOptionDetail = TRuneOptionDetail & {
  isConverted?: boolean;
};

/**
 * 룬 등급
 */
export type TRuneGrade = '일반' | '마법' | '희귀' | '영웅' | '전설'; //룬 등급

/**
 * 룬 성급
 */
export type TRuneStar = 1 | 2 | 3 | 4 | 5 | 6; // 룬 성급

/**
 * 룬 번호
 */
export type TRuneIndex = 1 | 2 | 3 | 4 | 5 | 6; // 룬 번호

/**
 * 룬 강화도
 */
export type TRuneUpgrade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

/**
 * 룬 상세 종류
 */
export interface IRuneDetail {
  type: TRuneType; // 룬세트 종류
  grade: TRuneGrade;
  star: TRuneStar;
  index: TRuneIndex;
  upgrade: TRuneUpgrade;
  mainOption: TRuneOption;
  preOption?: TRuneOptionDetail;
  subOption?: TRuneSubOptionDetail[]; // 부옵션
}

export type TMobPosition = '딜러' | '탱커' | '서포터';
