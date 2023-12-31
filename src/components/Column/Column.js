import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { getFilteredCards } from '../../redux/columnsRedux';

const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => getFilteredCards(state, id));
  

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;
