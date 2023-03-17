import React from 'react';
import {Animated, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';

const Page = ({item, index, selectedIndex, style, scale}) => {
  // console.log(selectedIndex);
  // console.log(item?.current / item?.max);
  return (
    // <View
    //   style={{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     ...style,
    //   }}>
    <Animated.View
      style={{
        ...style,
        backgroundColor: item.color,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        transform: [{scale: scale}],
        opacity: index === selectedIndex ? 1 : 0.3,
      }}>
      <Text>Day {item.num}</Text>
      <Text>You watched {item.current} minutes!</Text>
      <Progress.Bar
        // width="50%"
        height={10}
        progress={item?.current / item?.max}
        useNativeDriver
        borderWidth={1}
        unfilledColor={item.color}
        color="#3ac6f2"
      />
    </Animated.View>
    // </View>
  );
};

export default Page;
