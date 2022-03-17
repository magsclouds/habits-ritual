import React from 'react';

import HabitItem from '../HabitItem/HabitItem';
import './HabitList.css';

const HabitList = props => {
  return (
    <ul className="habit-list">
      {props.items.map(goal => (
        <HabitItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </HabitItem>
      ))}
    </ul>
  );
};

export default HabitList;