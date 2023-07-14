import { useState } from 'react';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD',  payload: { columnId, newCard: { id: shortid(), columnId, title } } });
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter card title"
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;