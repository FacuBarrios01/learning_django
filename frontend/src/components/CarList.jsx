import { useEffect } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import CarItem from "../components/CarItem";
import CarDetails from "../pages/CarDetails";
import {
  focusedCarAtom,
  carsAtom,
  currentViewAtom,
  appViewsEnum,
} from "../jotai/atoms";
import EditItem from "./EditItem";
import { ArrowUturnLeftIcon, PlusIcon } from "@heroicons/react/20/solid";

function CarList() {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [focusedCar, setFocusedCar] = useAtom(focusedCarAtom);
  const [cars, setCars] = useAtom(carsAtom);

  const deleteItem = async (carId) => {
    const params = {
      params: {
        ids: [carId],
      },
    };
    const response = await fetch("/cars", {
      method: "DELETE",
      body: JSON.stringify(params),
    });
    const responseBody = await response.json();
    if (responseBody.success == true) {
      const deletedCarIds = responseBody.data.deleted_car_ids;
      setCars(cars.filter((car) => !deletedCarIds.includes(car.id)));
      goHomeView();
    } else return responseBody.message;
  };

  const detailItem = (carId) => {
    setFocusedCar(...cars.filter((car) => car.id == carId));
    setCurrentView(appViewsEnum.DETAILED_VIEW);
  };

  const editItem = (carId) => {
    setCurrentView(appViewsEnum.EDIT_VIEW);
  };

  const goHomeView = () => {
    setCurrentView(appViewsEnum.HOME_VIEW);
  };

  return (
    <div className=" bg-zinc-500 w-auto h-screen flex justify-center">
      <div
        id="wrapper"
        className="w-4/5 flex flex-col bg-stone-700 rounded-lg p-4">
        <div id="content" className="h-[30px] overflow-auto grow p-4 pt-5 pb-3">
          {currentView === appViewsEnum.HOME_VIEW &&
            cars.map((car) => {
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
          {currentView === appViewsEnum.DETAILED_VIEW && (
            <CarDetails
              car={focusedCar}
              deleteFunction={deleteItem}
              goHomeView={goHomeView}
            />
          )}
          {currentView === appViewsEnum.EDIT_VIEW && <EditItem />}
        </div>
        <div id="footer" className="h-[55px] flex px-6 pt-4">
          <div className="flex justify-start">
            {currentView !== appViewsEnum.HOME_VIEW && (
              <button onClick={() => goHomeView()}>
                <ArrowUturnLeftIcon className="w-4 h-4 text-white"></ArrowUturnLeftIcon>
              </button>
            )}
          </div>
          <div className="flex flex-auto justify-end ">
            <button>
              <PlusIcon className="w-5 h-5 text-white"></PlusIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarList;
