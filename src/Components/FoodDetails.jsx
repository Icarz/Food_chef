import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Ingredients from "./Ingredients";

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
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🔔{food.readyInMinutes} Minutes to be done </strong>
          </span>
          <span>
            <strong> 👨‍🍳 Serve: {food.servings} People</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🍃 Vegetarian" : "🥩  Non - Vegetarian"}
            </strong>
          </span>
          <span>{food.vegan ? "Vegan Meal" : ""}</span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing} Per Serving</strong>
          </span>
        </div>
      </div>
      <h2 className={styles.ingredients}>Ingredients</h2>
      <Ingredients food={food} />
      <h2 className={styles.instructions}>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {food.analyzedInstructions &&
            food.analyzedInstructions.length > 0 &&
            food.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default FoodDetails;
