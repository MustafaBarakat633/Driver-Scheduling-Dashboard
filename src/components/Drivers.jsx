import { Users } from "lucide-react";
import CardTitle from "./UI/CardTitle/CardTitle";
import Table from "./UI/Table/Table";

export default function Drivers() {
  const drivers = [];
  return (
    <div className="card">
      <CardTitle title="Drivers" icon={<Users />} />
      <Table
        isDataExit={Boolean(drivers.length)}
        th1="Driver"
        th2="available"
        messageIfEmpty="No drivers added yet!"
      >
        {drivers.map((driver) => (
          <tr>
            <td>{driver.name}</td>
            <td>{driver.isAvailable ? "Yes" : "No"}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
