import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import NavBar from "./Components/NavBar";
import Container from "./Components/Container";
import "./App.css";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";
const App = () => {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div>
      <NavBar />
      <Search fooData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList
            setFoodId={setFoodId}
            foodData={foodData}
            setFoodData={setFoodData}
          />
        </InnerContainer>

        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
};

export default App;
