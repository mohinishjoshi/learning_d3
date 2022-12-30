import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React D3 Examples</h1>
          <nav>
            <ul>
              <li>
                <Link to={`barchart`}>Bar Chart</Link>
              </li>
              <li>
                <Link to={`linechart`}>Simple Line Chart</Link>
              </li>
              <li>
                <Link to={`multi-linechart`}>Multi Line Chart</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }