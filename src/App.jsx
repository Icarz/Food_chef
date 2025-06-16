import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";

const App = () => {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Search fooData={foodData} setFoodData={setFoodData} />

      <FoodList foodData={foodData} setFoodData={setFoodData} />
    </div>
  );
};

export default App;
