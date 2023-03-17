import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, FlatList, Text, View} from 'react-native';
import Page from './Page';
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const SCALE_TIME = 100;

const Carousel = ({gap, offset, pages}) => {
  const pageWidth = SCREEN_WIDTH - (gap + offset) * 2;
  // const pageWidthAnimated = useRef(new Animated.Value(pageWidth)).current;
  // const pageWidths = new Array(pages.length).fill(pageWidthAnimated);

  const scale = 0.85;
  // let scales = new Array(pages.length);
  // scales = scales.map(item => useRef(new Animated.Value(scale)).current);
  let scales = Array.from(
    {length: pages.length},
    () => useRef(new Animated.Value(scale)).current,
  );
  scales[0] = useRef(new Animated.Value(1)).current;
  const [page, setPage] = useState(0);
  // console.log(scale);
  function renderItem({item, index}) {
    return (
      <Page
        index={index}
        selectedIndex={page}
        item={item}
        scale={scales[index]}
        style={{
          width: pageWidth,
          height: pageWidth * 1.5,
          // flex: 1,
          marginHorizontal: gap / 2,
        }}
      />
    );
  }
  const onScroll = e => {
    // console.log(e);
    const oldPage = page;
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
    if (oldPage === newPage) {
    } else {
      if (
        oldPage >= 0 &&
        oldPage < pages.length &&
        newPage >= 0 &&
        newPage < pages.length
      ) {
        // console.log(oldPage, '->', newPage);
        Animated.timing(scales[oldPage], {
          toValue: scale,
          duration: SCALE_TIME,
          useNativeDriver: true,
        }).start();
        Animated.timing(scales[newPage], {
          toValue: 1,
          duration: SCALE_TIME,
          useNativeDriver: true,
        }).start();
      }
    }
  };
  // useEffect(() => {
  //   console.log('###############\n\t', pageWidths);
  //   console.log('###############');
  // }, [pageWidths]);
  // useEffect(() => {
  //   console.log('###############\n\t', scales);
  //   console.log('###############');
  // }, [scales]);
  return (
    <View
      style={{
        // height: '60%',
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#e3e',
      }}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
          alignItems: 'center',
          // borderWidth: 1,
          // justifyContent: 'flex-end',
          // backgroundColor: '#3e3',
          // borderWidth: 1,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={item => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        // snapToInterval={pageWidth + gap}
        snapToOffsets={Array.from(Array(pages.length)).map(
          (_, index) => index * (pageWidth + gap),
        )}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
      />
      {/* <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <View
            style={{
              marginRight: 4,
              backgroundColor: i === page ? '#262626' : '#dfdfdf',
              width: 6,
              height: 6,
              borderRadius: 6 / 3,
            }}
            key={`indicator_${i}`}
            focused={i === page}
          />
        ))}
      </View> */}
    </View>
  );
};

export default Carousel;
