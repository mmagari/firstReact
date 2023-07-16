import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = ( { listId }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
 };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titleInput">Title:</label>
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="iconInput">Icon:</label>
        <input
          type="text"
          id="iconInput"
          value={icon}
          onChange={e => setIcon(e.target.value)}
        />
      <Button>Add column</Button>
      </div>
    </form>
  );
};

export default ColumnForm;
