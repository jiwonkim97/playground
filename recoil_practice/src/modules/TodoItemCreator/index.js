import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {todoListState} from '../../utils/Atom';
let id = 0;

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  // 고유한 Id 생성을 위한 유틸리티
  function getId() {
    return id++;
  }

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = text => {
    setInputValue(text);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        style={{
          flex: 4,
          backgroundColor: '#00ffff',
          height: 50,
          paddingLeft: 16,
        }}
        value={inputValue}
        placeholder={'Input Todo name here'}
        onChangeText={onChange}
      />
      <Pressable
        style={{
          flex: 1,
          height: 30,
          borderRadius: 50,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={addItem}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

export default TodoItemCreator;
