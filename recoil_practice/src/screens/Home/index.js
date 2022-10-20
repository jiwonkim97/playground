import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

const Home = ({navigation}) => {
  function onPressTodoBtn() {
    navigation.navigate('Todos');
  }
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Pressable
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPressTodoBtn}>
        <Text>Go To TODOs</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
