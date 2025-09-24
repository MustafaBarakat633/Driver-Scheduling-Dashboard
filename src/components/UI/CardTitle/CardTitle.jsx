import styles from "./CardTitle.module.css";

export default function CardTitle({ title, icon }) {
  return (
    <h2 className={styles.h2}>
      {icon}
      {title}
    </h2>
  );
}
