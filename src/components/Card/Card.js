import styles from './Card.module.scss';

const Card = ({ title }) => (
  <li className={styles.card}>{title}</li>
);

export default Card;