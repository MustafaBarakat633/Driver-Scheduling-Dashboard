import styles from "./Input.module.css";

export default function Input({
  label = "Input Label",
  name,
  type = "text",
  id,
  list,
  ...props
}) {
  return (
    <div className={styles.box}>
      <label htmlFor={id}>{label}</label>

      {list ? (
        <select name={name} id={id} required>
          <option value="">-- Select a driver --</option>
          {list.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} id={id} required {...props} />
      )}
    </div>
  );
}
