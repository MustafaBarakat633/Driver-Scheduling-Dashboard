import { Users } from "lucide-react";
import CardTitle from "./UI/CardTitle/CardTitle";
import Table from "./UI/Table/Table";

export default function Drivers({ drivers }) {
  return (
    <div className="card">
      <CardTitle title="Drivers" icon={<Users />} />
      <Table
        isDataExit={Boolean(drivers.length)}
        th1="Driver"
        th2="Available"
        messageIfEmpty="No drivers added yet!"
      >
        {drivers.map((driver) => (
          <tr key={driver.id}>
            <td>{driver.name}</td>
            <td>
              {driver.isAvailable ? (
                <>
                  <span className="green">Yes</span>{" "}
                  <span className="warning">Assigned</span>
                </>
              ) : (
                <>
                  <span className="red">No</span>{" "}
                  <span className="warning">Unassigned</span>
                </>
              )}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
