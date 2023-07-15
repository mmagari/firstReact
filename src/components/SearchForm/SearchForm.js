import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput.js'
import Button from '../Button/Button.js'
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchValue));
  };
  return (
    <form className={styles.searchForm}  onSubmit={handleSearch}>
        <TextInput placeholder="Search…" 
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <Button><span className="fa fa-search" /></Button>
    </form>
  );
};

export default SearchForm;
