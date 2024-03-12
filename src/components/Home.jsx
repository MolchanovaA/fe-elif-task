import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAll, sorting } from "../utils/api-requsts";
import DrugCard from "./DrugCard";

const Home = ({ setCart_items }) => {
  const { id } = useParams();
  const [list_of_drugs, setListOfDrugs] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [order, setOrder] = useState("desc");
  const [sortQuery, setSortQuery] = useState({
    sortby: "price",
    orderby: order,
  });

  const sortByHandler = (e) => {
    setSortQuery({ ...sortQuery, sortby: e.target.value });
  };

  const orderByHandler = (e) => {
    setSortQuery({ ...sortQuery, orderby: e.target.value });
  };

  useEffect(() => {
    getAll(id).then((data_list) => {
      setIsLoaded(true);
      setListOfDrugs(data_list);
    });
  }, [id]);

  useEffect(() => {
    sorting(sortQuery).then((sortedList) => {
      if (id) {
        sortedList = sortedList.filter((item) => item.store_id == id);
      }
      setListOfDrugs(sortedList);
    });
  }, [sortQuery]);

  if (!isLoaded) {
    return "PAGE is LOADING";
  }
  return (
    <main>
      <h1>List Of Drugs</h1>
      <div className="sortingQueries">
        <form action="GET" onChange={sortByHandler}>
          <label>
            Sort By
            <select name="sorting_option">
              {" "}
              <option value="price" defaultValue>
                Price
              </option>
              <option value="added">Date</option>
            </select>
          </label>
        </form>
        <form action="GET" onChange={orderByHandler}>
          <label>
            Sort By
            <select name="orderBy_option">
              {" "}
              <option value="desc">DESC</option>
              <option value="asc" defaultValue>
                ASC
              </option>
            </select>
          </label>
        </form>
      </div>
      <ul className="list_wrapper">
        {list_of_drugs.map((item, i) => {
          return (
            <DrugCard
              key={item.drug_id}
              item={item}
              setCart_items={setCart_items}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
