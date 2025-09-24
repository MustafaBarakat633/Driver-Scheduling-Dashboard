import { UserPlus } from "lucide-react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import CardTitle from "./UI/CardTitle/CardTitle";

export default function DriverForm() {
  return (
    <div className="card">
      <CardTitle title="Driver Form" icon={<UserPlus />} />
      <Input
        label="Driver Name"
        id="driver-name"
        placeholder="Enter your name..."
      />
      <div className="is-available">
        <input type="checkbox" name="is-available" id="is-available" />
        <label htmlFor="is-available">Available</label>
      </div>
      <Button label="Add Driver" />
    </div>
  );
}
