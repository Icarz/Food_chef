import styles from "./ingredientsitems.module.css";
const IngredientsItems = ({ food }) => {
  return (
    <div>
      {food.extendedIngredients.map((item) => (
        <div className={styles.itemContainer} key={item.id}>
          <div className={styles.imageContainer}>
            <img
            className={styles.image}
              src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              alt={item.name}
            />
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.amount}>
              {item.amount} {item.unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientsItems;
