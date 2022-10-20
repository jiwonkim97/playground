import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {todoListFilterState} from '../../utils/Atom';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const filterOption = ['Show All', 'Show Completed', 'Show Uncompleted'];

  function updateFilter(value) {
    setFilter(value);
  }
  return (
    <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
      {filterOption.map((item, idx) => (
        <Pressable
          key={idx}
          onPress={() => updateFilter(item)}
          style={{
            flex: 1,
            height: '100%',
            borderWidth: 1,
            backgroundColor: item === filter ? '#00ff00' : '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default TodoListFilters;
