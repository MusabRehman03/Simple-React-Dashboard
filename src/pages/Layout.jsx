import { Outlet, Link } from "react-router-dom";
import ResponsiveDrawer from "../ResponsiveDrawer";

const Layout = () => {
  return (
    <div>
      <nav>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> */}
        <ResponsiveDrawer/>
      </nav>
      {/* This is where child components will be rendered */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
