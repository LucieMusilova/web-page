import { Outlet } from "react-router-dom";
import Header from "./Header";

const Homepage = () => {
  return (
      <div className="homepage">
        <Header />
        <Outlet />
      </div>

  )
}

export default Homepage;