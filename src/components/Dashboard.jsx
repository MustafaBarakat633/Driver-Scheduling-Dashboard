import { ClipboardList } from "lucide-react";
import CardTitle from "./UI/CardTitle/CardTitle";
import Table from "./UI/Table/Table";

export default function Dashboard() {
  const routes = [];
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
          <tr>
            <td>{item.route}</td>
            <td>{item.driver}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
