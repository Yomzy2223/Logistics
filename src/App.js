import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
