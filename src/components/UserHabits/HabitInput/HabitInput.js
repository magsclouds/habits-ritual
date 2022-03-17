import React, { useState } from 'react';

import styles from './HabitInput.module.css';
import Button from '../../UI/Button';

const HabitInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
        setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 ) { // .trim() <-- built in method, cleares empety spaces
        setIsValid(false);
        return; //function execution stops when you return, code will stop here
    }
    props.onAddGoal(enteredValue);
  };

  // LINE 31 --> Dynamic Class = .form-control from css + invalid option

  return (
    <form onSubmit={formSubmitHandler}>
        <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
            <label>Habit Goal</label>
            <input type="text" onChange={goalInputChangeHandler}/>
        </div>
      <Button type="submit">Add New Habit</Button>
    </form>
  );
};

export default HabitInput;