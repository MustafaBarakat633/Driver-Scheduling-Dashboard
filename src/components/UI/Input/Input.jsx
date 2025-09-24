import styles from "./Input.module.css";

export default function Input({
  label = "Input Label",
  type = "text",
  id,
  list,
  listId,
  ...props
}) {
  return (
    <div className={styles.box}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...props} list={listId} />
      {list && (
        <datalist id={listId}>
          {list.map((item) => (
            <option value={item} />
          ))}
        </datalist>
      )}
    </div>
  );
}
