import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {todoListState} from '../../utils/Atom';

const TodoItem = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        style={{
          flex: 3,
          height: 50,
          borderWidth: 1,
          paddingLeft: 16,
        }}
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      <Pressable
        onPress={toggleItemCompletion}
        style={{
          flex: 3,
          height: 50,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Complete : {item.isComplete ? 'O' : 'X'}</Text>
      </Pressable>
      <Pressable
        style={{
          flex: 1,
          height: 50,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={deleteItem}>
        <Text>X</Text>
      </Pressable>
    </View>
  );
};
export default TodoItem;
