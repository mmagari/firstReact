import { useState } from 'react';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';

const CardForm = ({ action, columnId }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title }, columnId);
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