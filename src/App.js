import "./styles/App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((r) => r.json())
      .then(setGoals);
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Outlet context={{ goals, setGoals }} />
    </div>
  );
}

export default App;
