import { Route, Routes } from "react-router-dom";
import Home from "../Home.jsx";
import Cart from "../Cart.jsx";
import ErrorPage from "../ErrorPage.jsx";
import SideBar from "../SideBar.jsx";
import { useState } from "react";

const RoutesComponent = () => {
  const [cart_items, setCart_items] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home setCart_items={setCart_items} />} />
          <Route
            path="/drugs/:id"
            element={<Home setCart_items={setCart_items} />}
          />
        </Route>
        <Route path="/cart" element={<Cart cart_items={cart_items} />} />
        <Route
          path="/*"
          element={<ErrorPage msg={"Page not found"} code={404} />}
        />
      </Routes>
    </>
  );
};

export default RoutesComponent;
