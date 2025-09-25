import { ClipboardList } from "lucide-react";
import CardTitle from "./UI/CardTitle/CardTitle";
import Table from "./UI/Table/Table";

export default function Dashboard({ drivers }) {
  const routes = drivers.filter((driver) => driver.route);

  return (
    <div className="card">
      <CardTitle title="Dashboard" icon={<ClipboardList />} />
      <Table
        isDataExit={Boolean(routes.length)}
        th1="Route"
        th2="Driver"
        messageIfEmpty="No routes added yet!"
      >
        {routes.map((item) => (
          <tr key={item.id}>
            <td>{item.route}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
