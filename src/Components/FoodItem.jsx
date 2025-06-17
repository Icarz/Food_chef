import styles from "./fooditem.module.css";

const FoodItem = ({ food }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.name}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>view recipe</button>
      </div>
    </div>
  );
};

export default FoodItem;
