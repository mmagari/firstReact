import styles from "./Column.module.scss";

const Column = ({ title, icon }) => (
  <article className={styles.column}>
    <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + icon} />{title}</h2>
  </article>
);

export default Column;

