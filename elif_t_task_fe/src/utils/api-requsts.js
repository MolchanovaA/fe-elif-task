import axios from "axios";

const storeApi = axios.create({
  baseURL: "https://molchanova-drug-shop.onrender.com/",
});

export const getAll = (id) => {
  let request = "drugs";
  if (id) {
    request += `/${id}`;
  }
  return storeApi.get(request).then(({ data }) => {
    return data;
  });
};

export const sorting = ({ sortby, orderby = "desc" }) => {
  if (!sortby) return;
  let request = `drugs?sortby=${sortby}&order=${orderby}`;

  return storeApi.get(request).then(({ data }) => {
    return data;
  });
};
