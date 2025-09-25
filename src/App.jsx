import { Car, LayoutDashboard } from "lucide-react";
import Dashboard from "./components/Dashboard";
import DriverForm from "./components/DriverForm";
import Drivers from "./components/Drivers";
import RouteForm from "./components/RouteForm";
import useDriversState from "./custom-hooks/useDriversState";

export default function App() {
  const { drivers, handleAddDriver, handleAddRoute } = useDriversState();

  return (
    <div className="flex-box">
      <div className="side">
        <Car size={60} />
        <p>Driver Scheduling Dashboard</p>
      </div>
      <div>
        <h1 className="gradient-text">
          <LayoutDashboard size={35} /> Driver Scheduling Dashboard
        </h1>
        <section>
          <DriverForm onAddDriver={handleAddDriver} />
          <Drivers drivers={drivers} />
          <RouteForm
            driversNames={drivers.map((driver) => driver.name)}
            onAddRoute={handleAddRoute}
          />
          <Dashboard drivers={drivers} />
        </section>
      </div>
    </div>
  );
}
