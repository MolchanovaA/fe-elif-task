const DrugCard = ({ item }) => {
  const addToCartHandler = () => {
    console.log(item, "CLICKES");
  };
  return (
    <li className="item_card">
      <h3>{item.drug_name}</h3>
      <div>Price: {item.price} uah</div>
      <button onClick={addToCartHandler}>Add to cart</button>
    </li>
  );
};

export default DrugCard;
