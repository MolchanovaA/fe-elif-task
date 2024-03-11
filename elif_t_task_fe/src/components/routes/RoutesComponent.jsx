import { Route, Routes } from "react-router-dom";
import Home from "../Home.jsx";
import Cart from "../Cart.jsx";
import ErrorPage from "../ErrorPage.jsx";
import SideBar from "../SideBar.jsx";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route path="/drugs" element={<Home />} />
          <Route path="/drugs/:id" element={<Home />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/*"
          element={<ErrorPage msg={"Page not found"} code={404} />}
        />
      </Routes>
    </>
  );
};

export default RoutesComponent;
