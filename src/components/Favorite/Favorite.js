import React from 'react';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.description}>This is the Favorite page.</p>
      {favoriteCards.length > 0 ? (
      <ul className={styles.cards}>
        {favoriteCards.map((card) => (
          <li key={card.id} className={styles.card}>
            <span>{card.title}</span>
          </li>
        ))}
      </ul>
      ) : ( 
        <p className={styles.emptyMessage}>You don't have any favorite cards.</p>
      )}
    </div>
  );
};

export default Favorite;