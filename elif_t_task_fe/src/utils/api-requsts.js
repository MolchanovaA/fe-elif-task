import axios from "axios";

const storeApi = axios.create({
  baseURL: "https://molchanova-drug-shop.onrender.com/",
});

export const getAll = (id) => {
  let request = "drugs";
  if (id) {
    request += `/${id}`;
  }
  console.log(id, "ID");
  return storeApi.get(request).then(({ data }) => {
    return data;
  });
};
