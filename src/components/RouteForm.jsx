import { MapPinPlus } from "lucide-react";
import Button from "./UI/Button/Button";
import CardTitle from "./UI/CardTitle/CardTitle";
import Input from "./UI/Input/Input";

export default function RouteForm({ driversNames, onAddRoute }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formDate = new FormData(event.target);
    const data = Object.fromEntries(formDate.entries());
    onAddRoute({
      route: data.routeName.trim(),
      chosenDriver: data.driverName,
    });
    event.target.reset();
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <CardTitle title="Route Form" icon={<MapPinPlus />} />
      <Input
        label="Route Name"
        id="route-name"
        name="routeName"
        placeholder="Enter route name..."
      />
      <Input
        label="Assign Driver"
        id="assign-driver"
        name="driverName"
        list={driversNames}
      />
      <Button label="Add Route" />
    </form>
  );
}
