import { useState, useEffect } from "react";
import CarItem from "../components/CarItem";
import { Link } from "react-router-dom";
import CarDetails from "../pages/CarDetails";
import EditItem from "./EditItem";

function CarList() {
  const [cars, setCars] = useState([]);
  const [detailedView, setDetailedView] = useState([false, 0]);
  const [editView, setEditView] = useState([false, 0]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/cars/");
      const data = await response.json();
      console.log(data);
      setCars(data);
    };

    fetchData().catch(console.error);
  }, []);

  const deleteItem = (carId) => {
    setCars({
      data: cars.data?.filter((car) => car.id !== carId),
    });
    setDetailedView([false, detailedView[1]]);
  };

  const detailItem = (carId) => {
    setDetailedView([!detailedView[0], carId]);
  };

  const editItem = (carId) => {
    setEditView([!editView, carId]);
  };

  return (
    <div className=" bg-zinc-500 w-auto h-screen flex justify-center">
      <div className="bg-stone-700 w-3/4 p-4 my-8 rounded-lg flex flex-col drop-shadow-2xl">
        {detailedView[0] ||
          editView[0] ||
          cars.data?.map((car) => {
            return (
              <CarItem
                car={car}
                key={car.id}
                deleteFunction={deleteItem}
                detailFunction={detailItem}
                editFunction={editItem}
              />
            );
          })}
        {detailedView[0] && (
          <CarDetails
            car={detailedView[1]}
            deleteFunction={deleteItem}
            detailFunction={detailItem}
          />
        )}
      </div>
    </div>
  );
}

export default CarList;
