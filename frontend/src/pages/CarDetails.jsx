import { ArrowUturnLeftIcon, TrashIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CarDetails(props) {
  const [car, setCar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/cars/`);
      const data = await response.json();
      let carMatch;
      data.data.map((car) => {
        if (car.id == props.car) carMatch = car;
      });
      setCar(carMatch);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <table className="table-auto bg-stone-600 rounded-t-2xl w-full border-b-2 border-stone-700">
        <thead className="text-white">
          <tr className="row">
            <th>Model</th>
            <th>Engine Model</th>
            <th>Fuel type</th>
            <th>Registration Date</th>
            <th>Release Year</th>
            <th>Nº doors</th>
            <th>Kilometers</th>
          </tr>
        </thead>
        <tbody className="p-6 text-white">
          <tr className="row">
            <td>{car.model}</td>
            <td>{car.engine_model}</td>
            <td>{car.fuel_type || <p>-</p>}</td>
            <td>{car.registration_date || <p>-</p>}</td>
            <td>{car.releaseYear || <p>-</p>}</td>
            <td>{car.number_of_doors || <p>-</p>}</td>
            <td>{car.kilometer || <p>-</p>}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex-col rounded-b-2xl bg-stone-600 p-4 text-white w-full">
        <h3 className="font-bold">Observations</h3>
        <p className="p-4">{car.observations || "-"}</p>
        <div className="flex">
          <button onClick={() => props.detailFunction(null)}>
            <ArrowUturnLeftIcon className="w-4 h-4"></ArrowUturnLeftIcon>
          </button>
          <div className="flex-auto flex justify-end">
            <button onClick={() => props.deleteFunction(car.id)}>
              <TrashIcon className="w-4 h-4"></TrashIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
