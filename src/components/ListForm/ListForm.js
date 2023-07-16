import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listRedux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ListForm.module.scss';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList(title, description));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label></label>
      <TextInput
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add list</Button>
    </form>
  );
};

export default ListForm;
