import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      {" "}
      <section className="main_section">
        <aside className="side_bar_nav">
          <h2>Drug Stores:</h2>
          <ul>
            <li>
              <Link to="/drugs/1">Store 1</Link>
            </li>
            <li>
              <Link to="/drugs/2">Store 2</Link>
            </li>
            <li>
              <Link to="/drugs/3">Store 3</Link>
            </li>
          </ul>
        </aside>
        <Outlet />
      </section>
    </>
  );
};

export default SideBar;
