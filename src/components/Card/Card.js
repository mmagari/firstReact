import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();
  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(id));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <div className={styles.icons}>
        <button className={styles.favoriteButton} onClick={handleFavoriteToggle}>
          {isFavorite ? <span className={`fa fa-star-o ${styles.activeIcon} `}/> : <span className="fa fa-star-o" />}
        </button>
        <button className={styles.removeButton} onClick={handleRemoveCard}>
          <span className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default Card;
