import { useEffect, useState } from "react";

const DrugCard = ({ item, setCart_items, setTotalPrice, setListener }) => {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(item.price);
  const [newPrice, setNewPrice] = useState();

  const handleChange = (e) => {
    setCounter(e.target.value);
  };

  const addToCartHandler = () => {
    setCart_items((current) => {
      if (current.includes(item)) {
        return current;
      }
      return [...current, item];
    });
  };

  useEffect(() => {
    setNewPrice(price * counter);
  }, [counter]);

  if (setTotalPrice) {
    useEffect(() => {
      const newTotal = price * counter;
      const id = item.drug_id;

      setTotalPrice((curr) => {
        curr[id] = newTotal;

        return curr;
      });
      setListener((cur) => cur + 1);
    }, [counter]);
  }

  return (
    <li className="item_card">
      <h3>{item.drug_name}</h3>
      <div>Price: {item.price} uah</div>
      <div>Added: {item.added.slice(0, 10)}</div>
      {setCart_items ? (
        <button onClick={addToCartHandler}>Add to cart</button>
      ) : (
        ""
      )}
      {!setCart_items ? (
        <>
          <form method="GET" className="counter_form">
            {" "}
            <input
              type="number"
              min={0}
              name="number_if_items"
              value={counter}
              onChange={handleChange}
            />{" "}
          </form>
          <div>Total : {newPrice}</div>
        </>
      ) : (
        ""
      )}
    </li>
  );
};

export default DrugCard;
