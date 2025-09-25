export default function Table({
  isDataExit,
  th1,
  th2,
  messageIfEmpty,
  children,
}) {
  return isDataExit ? (
    <table>
      <thead>
        <tr>
          <th>{th1}</th>
          <th>{th2}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  ) : (
    <p style={{ textAlign: "center" }}>{messageIfEmpty}</p>
  );
}
