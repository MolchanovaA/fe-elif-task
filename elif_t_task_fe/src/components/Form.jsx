const UserForm = () => {
  const submHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      action="POST"
      className="user_form"
      id="user_form"
      onSubmit={submHandler}
    >
      <label>
        {" "}
        Name:
        <input type="text" name="user_name" placeholder="your name" />
      </label>
      <label>
        {" "}
        Email:
        <input type="email" name="user_email" placeholder="your name" />
      </label>
      <label>
        {" "}
        Phone:
        <input type="phone" name="user_phone" placeholder="phone number" />
      </label>
      <label>
        {" "}
        Address:
        <input type="text" name="user_address" placeholder="address" />
      </label>
    </form>
  );
};

export default UserForm;
