import React from "react";
import {
  FireIcon,
  ChartBarIcon,
  ClockIcon,
  TrashIcon,
  PencilIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";

const CarItem = ({ car, detailFunction, deleteFunction, editFunction }) => {
  return (
    <div
      to={`/cardetails/${car.id}`}
      className="bg-stone-800 h-fit flex flex-col rounded-xl  m-2">
      <div className="flex-auto w-full justify-start px-5 py-2">
        <p className="font-sans font-medium text-white">{car.model}</p>
      </div>
      <div className="flex p-3">
        <div className="flex-none flex">
          <div className="flex">
            <ClockIcon className="h-6 w-6 ml-2 text-white" />
            <p className="text-white">{car.releaseYear}</p>
          </div>
          <div className="flex">
            <FireIcon className="h-6 w-6 ml-2 text-red-600" />
            <p className="text-white">{car.fuel_type}</p>
          </div>
          {car.kilometer != null && (
            <div className="flex">
              <ChartBarIcon className="h-6 w-6 ml-2 text-white" />
              <p className="text-white">{car.kilometer} km</p>
            </div>
          )}
        </div>
        <div className="flex-auto flex justify-end">
          <button
            className="w-4 h-4 mr-1 text-white"
            onClick={() => {
              editFunction(car.id);
            }}>
            <PencilIcon></PencilIcon>
          </button>
          <button
            className="w-4 h-4 text-white"
            onClick={() => detailFunction(car.id)}>
            <ArrowTopRightOnSquareIcon />
          </button>
          <button
            className="text-white w-4 h-4 ml-2"
            onClick={() => deleteFunction(car.id)}>
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
