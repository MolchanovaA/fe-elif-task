import { useEffect, useState } from "react";
import DrugCard from "./DrugCard";
import UserForm from "./UserForm";

const Cart = ({ cart_items }) => {
  const [cart_list, setCartList] = useState(cart_items);
  const [totalPrice, setTotalPrice] = useState({});
  const [listener, setListener] = useState(0);
  const [finalSum, setFinalSum] = useState(0);
  const [canBeSubmitted, setCanBeSubmitted] = useState("Submit");

  useEffect(() => {
    const sum = Object.values(totalPrice).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    setFinalSum(sum);
  }, [listener]);

  return (
    <>
      <main className="main_section ">
        <UserForm
          setCanBeSubmitted={setCanBeSubmitted}
          totalPrice={totalPrice}
          finalSum={finalSum}
        />
        <ul className="list_wrapper">
          {cart_list.map((item, i) => {
            return (
              <DrugCard
                key={item.drug_id}
                item={item}
                setTotalPrice={setTotalPrice}
                setListener={setListener}
              />
            );
          })}
        </ul>
      </main>
      <section className="payment_sec">
        <div>Total To Pay : {finalSum}</div>
        <button form="user_form" className="hint">
          {" "}
          {canBeSubmitted}{" "}
        </button>
      </section>
    </>
  );
};

export default Cart;
