import React from 'react';
import {Dimensions, SafeAreaView, Text} from 'react-native';
import Carousel from './Carousel';
const PAGES = [
  {
    num: 1,
    color: '#86E3CE',
    max: 10,
    current: 10,
  },
  {
    num: 2,
    color: '#D0E6A5',
    max: 10,
    current: 8,
  },
  {
    num: 3,
    color: '#FFDD94',
    max: 10,
    current: 6,
  },
  {
    num: 4,
    color: '#FA897B',
    max: 10,
    current: 7,
  },
  {
    num: 5,
    color: '#CCABD8',
    max: 10,
    current: 0,
  },
];
const GAP = 10;
const OFFSET = 40;

const CarouselTest = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Carousel gap={GAP} offset={OFFSET} pages={PAGES} />
    </SafeAreaView>
  );
};

export default CarouselTest;
