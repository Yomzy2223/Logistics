import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
