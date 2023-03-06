import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarList from "../components/CarList";
import CarDetails from "./CarDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<CarList />} />
        <Route path="cardetails/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
