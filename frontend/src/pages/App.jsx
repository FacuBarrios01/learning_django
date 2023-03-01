import { useState, useEffect } from "react";
import CarItem from "../components/CarItem";
function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/cars/");
      const data = await response.json();
      console.log(data);
      setCars(data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className=" bg-zinc-500 w-auto h-screen flex justify-center">
      <div className="bg-stone-700 w-3/4 p-4 my-8 rounded-lg flex flex-col drop-shadow-2xl overflow-auto">
        {cars.data?.map((car, index) => {
          return <CarItem key={index} car={car} />;
        })}
      </div>
    </div>
  );
}

export default App;
