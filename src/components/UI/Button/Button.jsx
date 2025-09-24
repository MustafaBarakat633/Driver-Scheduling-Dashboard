import styles from "./Button.module.css";

export default function Button({ label, ...props }) {
  return (
    <button className={styles.btn} {...props}>
      {label}
    </button>
  );
}
