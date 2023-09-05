import "./root.css";
import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="page">
        <div id="navbar">
          <div className="logo">
            <h2 className="title">
              <NavLink to={"/"}>RichDad</NavLink>
            </h2>
          </div>
          <div className="tabs">
            <div className="tabsOptions">
              <NavLink to={"/shop"}>Shop</NavLink>
            </div>
            <div className="cartSection">
              <button className="btn btn-primary cart">
                <NavLink to={"/cart"}>Cart</NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="pageContent">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
