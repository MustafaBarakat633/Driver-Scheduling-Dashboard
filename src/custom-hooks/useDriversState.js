import { useState } from "react";

export default function useDriversState() {
  const [drivers, setDrivers] = useState([]);

  function handleAddDriver(newDriver) {
    setDrivers((prevState) => [...prevState, newDriver]);
  }

  function handleAddRoute(data) {
    setDrivers((prevState) => {
      return prevState.map((driver) => {
        if (driver.name === data.chosenDriver) {
          return {
            ...driver,
            isAvailable: false,
            route: data.route,
          };
        } else return driver;
      });
    });
  }

  return {
    drivers,
    handleAddDriver,
    handleAddRoute,
  };
}
