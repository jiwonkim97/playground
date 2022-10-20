import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RecoilRoot} from 'recoil';
import MyStack from './src/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <MyStack />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
