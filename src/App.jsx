import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import NavBar from "./Components/NavBar";
import Container from "./Components/Container";
import "./App.css";
import InnerContainer from "./Components/InnerContainer";
const App = () => {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <NavBar />
      <Search fooData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodData={setFoodData} />
        </InnerContainer>
      </Container>
    </div>
  );
};

export default App;
