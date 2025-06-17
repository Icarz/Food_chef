import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import NavBar from "./Components/NavBar";
import "./App.css";
const App = () => {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <NavBar />
      <Search fooData={foodData} setFoodData={setFoodData} />

      <FoodList foodData={foodData} setFoodData={setFoodData} />
    </div>
  );
};

export default App;
