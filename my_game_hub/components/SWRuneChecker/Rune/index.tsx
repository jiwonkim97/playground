import {
  IRuneDetail,
  TRuneGrade,
  TRuneIndex,
  TRuneOption,
  TRuneOptionDetail,
  TRuneStar,
  TRuneSubOptionDetail,
  TRuneType,
  TRuneUpgrade,
} from '@/types/summonersWarTypes';
import { v1 } from 'uuid';

export class Rune implements IRuneDetail {
  type: TRuneType;
  grade: TRuneGrade;
  star: TRuneStar;
  index: TRuneIndex;
  upgrade: TRuneUpgrade;
  mainOption: TRuneOption;
  preOption?: TRuneOptionDetail;
  subOption?: TRuneSubOptionDetail[] | undefined;
  uuid: string;
  constructor(
    type: TRuneType,
    grade: TRuneGrade,
    star: TRuneStar,
    index: TRuneIndex,
    upgrade: TRuneUpgrade,
    mainOption: TRuneOption,
    preOption?: TRuneOptionDetail,
    subOption?: TRuneSubOptionDetail[],
  ) {
    this.type = type;
    this.grade = grade;
    this.star = star;
    this.index = index;
    this.upgrade = upgrade;
    this.mainOption = mainOption;
    this.preOption = preOption;
    this.subOption = subOption ? [...subOption] : undefined;
    this.uuid = v1();
  }
}
