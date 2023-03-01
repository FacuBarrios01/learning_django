import React from "react";

const CarDetails = (props) => {
  return (
    <div>
      <table className="table-auto bg-stone-700 rounded-t-2xl w-full">
        <thead className="text-white">
          <tr className="row">
            <th className="text-center px-8 py-2">Model</th>
            <th className="text-center px-8 py-2">Engine Model</th>
            <th className="text-center px-8 py-2">Fuel type</th>
            <th className="text-center px-8 py-2">Registration Date</th>
            <th className="text-center px-8 py-2">Release Year</th>
            <th className="text-center px-8 py-2">Nº doors</th>
            <th className="text-center px-8 py-2">Kilometers</th>
          </tr>
        </thead>
        <tbody className="p-6 text-white">
          <tr className="row">
            <td className="px-8 py-4">{props.car.model}</td>
            <td className="px-8 py-4">{props.car.engine_model}</td>
            <td className="px-8 py-4">{props.car.fuel_type || <p>-</p>}</td>
            <td className="px-8 py-4">
              {props.car.registration_date || <p>-</p>}
            </td>
            <td className="px-8 py-4">{props.car.releaseYear || <p>-</p>}</td>
            <td className="px-8 py-4">
              {props.car.number_of_doors || <p>-</p>}
            </td>
            <td className="px-8 py-4">{props.car.kilometer || <p>-</p>}</td>
          </tr>
        </tbody>
      </table>
      <div className="rounded-b-2xl bg-stone-600 p-4 text-white">
        <h3 className="font-bold">Observations</h3>
        <p className="p-4">{props.car.observations || "-"}</p>
      </div>
    </div>
  );
};

export default CarDetails;
