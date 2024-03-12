import { useEffect, useState } from "react";
import DrugCard from "./DrugCard";
import UserForm from "./Form";

const Cart = ({ cart_items }) => {
  const [cart_list, setCartList] = useState(cart_items);
  const [totalPrice, setTotalPrice] = useState({});
  const [listener, setListener] = useState(0);
  const [finalSum, setFinalSum] = useState(0);

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
        <UserForm />
        <ul className="list_wrapper">
          {cart_list.map((item, i) => {
            return (
              <DrugCard
                key={item.drug_id}
                item={item}
                setCart_items={undefined}
                setTotalPrice={setTotalPrice}
                setListener={setListener}
              />
            );
          })}
        </ul>
      </main>
      <section className="payment_sec">
        <div>Total To Pay : {finalSum}</div>
        <button form="user_form"> SUBMIT </button>
      </section>
    </>
  );
};

export default Cart;
