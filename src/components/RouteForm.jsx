import { MapPinPlus, Route } from "lucide-react";
import Button from "./UI/Button/Button";
import CardTitle from "./UI/CardTitle/CardTitle";
import Input from "./UI/Input/Input";

export default function RouteForm() {
  return (
    <div className="card">
      <CardTitle title="Route Form" icon={<MapPinPlus />} />
      <Input
        label="Route Name"
        id="route-name"
        placeholder="Enter route name..."
      />
      <Input
        label="Assign Driver"
        id="assign-driver"
        placeholder="Choose driver..."
      />
      <Button label="Add Route" />
    </div>
  );
}
