import ReactDOM from "react-dom/client";
import "./styles/css/index.css";
import Homepage from "./components/Homepage";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OtherPages from "./components/OtherPages";
import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//Routes now have a single OtherPages component embedded.
//Each of them would otherwise have its own component with unique content.

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/o-nas" element={<OtherPages />} />
          <Route path="/aktuality" element={<OtherPages />} />
          <Route path="/novinky" element={<OtherPages />} />
          <Route path="/kontakty" element={<OtherPages />} />
          <Route path="/submenu" element={<OtherPages />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
