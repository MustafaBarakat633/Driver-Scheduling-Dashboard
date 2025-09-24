import { Car, CarFront, LayoutDashboard } from "lucide-react";
import Dashboard from "./components/Dashboard";
import DriverForm from "./components/DriverForm";
import Drivers from "./components/Drivers";
import RouteForm from "./components/RouteForm";

export default function App() {
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
          <DriverForm />
          <Drivers />
          <RouteForm />
          <Dashboard />
        </section>
      </div>
    </div>
  );
}
