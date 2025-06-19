import IngredientsItems from "./IngredientsItems";

const Ingredients = ({ food }) => {
  return (
    <div>
      {food.extendedIngredients && food.extendedIngredients.length > 0 && (
        <IngredientsItems food={food} />
      )}
    </div>
  );
};

export default Ingredients;
