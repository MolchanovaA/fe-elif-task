import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAll } from "../utils/api-requsts";
import DrugCard from "./DrugCard";

const Home = () => {
  const { id } = useParams();
  const [list_of_drugs, setListOfDrugs] = useState();
  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    getAll(id).then((data_list) => {
      setIsLoaded(true);
      setListOfDrugs(data_list);
    });
  }, [id]);

  if (!isLoaded) {
    return "PAGE is LOADING";
  }
  return (
    <main>
      <h1>List Of Drugs</h1>
      <ul className="list_wrapper">
        {list_of_drugs.map((item, i) => {
          return <DrugCard key={item.drug_id} item={item} />;
        })}
      </ul>
    </main>
  );
};

export default Home;
