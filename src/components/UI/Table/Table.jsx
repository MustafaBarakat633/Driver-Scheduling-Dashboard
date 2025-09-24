export default function Table({
  isDataExit,
  th1,
  th2,
  messageIfEmpty,
  children,
}) {
  return isDataExit ? (
    <table>
      <tr>
        <th>{th1}</th>
        <th>{th2}</th>
      </tr>
      {children}
    </table>
  ) : (
    <p style={{ textAlign: "center" }}>{messageIfEmpty}</p>
  );
}
