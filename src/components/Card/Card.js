import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();
  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button className={styles.favoriteButton} onClick={handleFavoriteToggle}>
        {isFavorite ? <span className={`fa fa-star-o ${styles.activeIcon} `}/> : <span className="fa fa-star-o" />}
      </button>
    </li>
  );
};

export default Card;
