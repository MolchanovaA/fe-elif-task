import { useEffect, useState } from "react";
import { validation } from "../utils/validation";
import { postOrder } from "../utils/api-requsts";

const UserForm = ({ setCanBeSubmitted, totalPrice, finalSum }) => {
  const [user_name, setUser_Name] = useState("");
  const [user_email, setUser_Email] = useState("");
  const [user_phone, setUser_Phone] = useState("");
  const [user_address, setUser_Address] = useState("");

  const [isValid_name, setIsValid_name] = useState(false);
  const [isValid_em, setIsValid_em] = useState(false);
  const [isValid_ph, setIsValid_ph] = useState(false);

  const onChangeInputHandler = (e) => {
    const target_value = e.target.value;
    const target_name = e.target.name;

    switch (target_name) {
      case "user_name":
        let name_validator = validation(target_value, target_name);
        setUser_Name(target_value);
        name_validator ? setIsValid_name(true) : setIsValid_name(false);
        break;
      case "user_email":
        let email_validator = validation(target_value, target_name);
        setUser_Email(target_value);
        email_validator ? setIsValid_em(true) : setIsValid_em(false);
        break;
      case "user_phone":
        let ph_validator = validation(target_value, target_name);
        setUser_Phone(target_value);
        ph_validator ? setIsValid_ph(true) : setIsValid_ph(false);
        break;
      case "user_address":
        setUser_Address(target_value);
    }
  };
  const submHandler = (e) => {
    e.preventDefault();
    if (isValid_name && isValid_em && isValid_ph && user_address && finalSum) {
      setCanBeSubmitted("Submitted");
      const drug_ids_for_db = Object.keys(totalPrice);
      postOrder(drug_ids_for_db);
      const user_order = {
        name: user_name,
        order: drug_ids_for_db,
      };
      localStorage.setItem("user_order", JSON.stringify(user_order));
    } else {
      setCanBeSubmitted("Not Submitted");
    }
  };

  return (
    <form
      action="POST"
      className="user_form"
      id="user_form"
      onSubmit={submHandler}
    >
      <label className="user_name">
        {" "}
        Name:
        <input
          type="text"
          name="user_name"
          placeholder="your name"
          className={isValid_name ? "valid" : "not_valid"}
          onChange={onChangeInputHandler}
          value={user_name}
        />
      </label>
      <label className="user_email">
        {" "}
        Email:
        <input
          type="email"
          name="user_email"
          placeholder="your name"
          onChange={onChangeInputHandler}
          value={user_email}
          className={isValid_em ? "valid" : "not_valid"}
        />
      </label>
      <label className="user_phone">
        {" "}
        Phone:
        <input
          type="phone"
          name="user_phone"
          placeholder="phone number"
          className={isValid_ph ? "valid" : "not_valid"}
          onChange={onChangeInputHandler}
          value={user_phone}
        />
      </label>
      <label className="user_address">
        {" "}
        Address:
        <input
          type="text"
          name="user_address"
          placeholder="address"
          onChange={onChangeInputHandler}
          className={user_address ? "valid" : "not_valid"}
          value={user_address}
        />
      </label>
    </form>
  );
};

export default UserForm;
