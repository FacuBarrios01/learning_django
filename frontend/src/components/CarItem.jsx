import React from "react";
import { FireIcon, ChartBarIcon, ClockIcon } from "@heroicons/react/20/solid";

const CarItem = (props) => {
  // const props = {
  //   car: {
  //     id: 9,
  //     registration_date: "2023-02-22",
  //     model: "TT",
  //     releaseYear: "2022-12-01",
  //     color: "A",
  //     number_of_doors: 5,
  //     engine_model: "Test Engine",
  //     kilometer: null,
  //     fuel_type: "Regular",
  //     observations: "",
  //   },
  // };
  const praygod = () => {
    console.log("god prayed");
  };

  return (
    <button
      className="bg-stone-800 h-fit flex flex-col rounded-xl w-fill m-2"
      onClick={praygod}>
      <div className="flex-auto w-full justify-start px-5 py-2">
        <p className="font-sans font-medium text-white">{props.car.model}</p>
        <div className="flex justify-start p-3 flex-wrap">
          <div className="flex">
            <ClockIcon className="h-6 w-6 ml-2 text-white" />
            <p className="text-white">{props.car.releaseYear}</p>
          </div>
          <div className="flex">
            <FireIcon className="h-6 w-6 ml-2 text-red-600" />
            <p className="text-white">{props.car.fuel_type}</p>
          </div>
          {props.car.kilometer != null && (
            <div className="flex">
              <ChartBarIcon className="h-6 w-6 ml-2 text-white" />
              <p className="text-white">{props.car.kilometer} km</p>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default CarItem;
