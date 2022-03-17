import React from 'react';

import './HabitItem.css';

const HabitItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="habit-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default HabitItem;