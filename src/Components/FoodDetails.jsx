import { useEffect, useState } from "react";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const API_KEY = "635bad02c69b418da5ed2cc4fc24b729";

  useEffect(() => {
    if (!foodId) return; // ⛔ Skip fetch if foodId is empty

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

    async function fetchDetail() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch food details");

        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (err) {
        console.error("Error:", err.message);
      }
    }

    fetchDetail();
  }, [foodId]); // ✅ Dependency on foodId

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>🔔{food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            <strong> Serve: 👨‍🍳 {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? " 🍃 Vegetarian" : "🥩  Non - Vegetarian"}
          </span>
          <span>{food.vegan ? "Vegan Meal" : ""}</span>
        </div>
        <div>
          <span>${food.pricePerServing / 10} Per Serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {food.analyzedInstructions &&
          food.analyzedInstructions.length > 0 &&
          food.analyzedInstructions[0].steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
      </div>
    </div>
  );
};

export default FoodDetails;
