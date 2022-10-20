import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import TodoItem from '../../modules/TodoItem';
import TodoItemCreator from '../../modules/TodoItemCreator';
import TodoListFilters from '../../modules/TodoListFilters';
import TodoListStats from '../../modules/TodoListStats';
import {filteredTodoListState, todoListState} from '../../utils/Atom';

const Todos = ({navigation}) => {
  const todoList = useRecoilValue(filteredTodoListState);

  function onPressHomeBtn() {
    navigation.navigate('Home');
  }
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1}}>
          <>
            <TodoListFilters />
            <TodoListStats />
            <TodoItemCreator />
            {todoList.map(todoItem => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Todos;
