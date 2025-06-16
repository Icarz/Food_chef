const FoodList = ({ foodData }) => {
  return (
    <div>
      {foodData.map((food) => (
        <h1 key={food.title}>{food.title}</h1>
      ))}
    </div>
  );
};

export default FoodList;
