import { ArrowUturnLeftIcon, TrashIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useAtomValue } from "jotai";
import { focusedCarAtom } from "../jotai/atoms";
function CarDetails({ deleteFunction, goHomeView }) {
  const car = useAtomValue(focusedCarAtom);

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
          <div className="flex-auto flex justify-end">
            <button onClick={() => deleteFunction(car.id)}>
              <TrashIcon className="w-4 h-4"></TrashIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
