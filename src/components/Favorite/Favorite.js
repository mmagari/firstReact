import React from 'react';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.description}>This is the Favorite page.</p>
    </div>
  );
};

export default Favorite;
