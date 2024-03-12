export const validation = (str, name) => {
  let result = false;
  switch (name) {
    case "user_name":
      result = /^\w{1,5}$/gi.test(str);
      break;
    case "user_email":
      result = /^\S+@\S+\.\S+$/.test(str);
      break;
    case "user_phone":
      result = /\d{10}/.test(str);
      break;
  }
  return result;
};
