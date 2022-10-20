import React from 'react';
import {Text, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {todoListStatsState} from '../../utils/Atom';

const TodoListStats = () => {
  const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} =
    useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <View>
      <Text>Total items: {totalNum}</Text>
      <Text>Items completed: {totalCompletedNum}</Text>
      <Text>Items not completed: {totalUncompletedNum}</Text>
      <Text>Percent completed: {formattedPercentCompleted}%</Text>
    </View>
  );
};

export default TodoListStats;
