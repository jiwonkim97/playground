import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RecoilRoot} from 'recoil';
import MyStack from './src/navigation/StackNavigation';
import CarouselTest from './src/screens/ShowCase/CarouselTest';

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        {/* <MyStack /> */}
        <CarouselTest />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
