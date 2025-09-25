import { UserPlus } from "lucide-react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import CardTitle from "./UI/CardTitle/CardTitle";

export default function DriverForm({ onAddDriver }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formDate = new FormData(event.target);
    const driverDate = Object.fromEntries(formDate.entries());
    driverDate.isAvailable = formDate.has("isAvailable");
    if (driverDate.driverName) {
      onAddDriver({
        name: driverDate.driverName.trim(),
        isAvailable: driverDate.isAvailable,
        route: undefined,
        id: crypto.randomUUID(),
      });
      event.target.reset();
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <CardTitle title="Driver Form" icon={<UserPlus />} />
      <Input
        label="Driver Name"
        id="driver-name"
        name="driverName"
        placeholder="Enter your name..."
      />
      <div className="is-available">
        <input type="checkbox" name="isAvailable" id="is-available" />
        <label htmlFor="is-available">Available</label>
      </div>
      <Button label="Add Driver" />
    </form>
  );
}
