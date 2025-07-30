// pages/Home.js
import { useOutletContext } from "react-router-dom";
import GoalCard from "../components/GoalCard";

function Home() {
  const { goals, setGoals } = useOutletContext();

  function handleDeposit(goalId, amount) {
    const goalToUpdate = goals.find((g) => g.id === goalId);
    const updatedGoal = {
      ...goalToUpdate,
      savedAmount: goalToUpdate.savedAmount + amount,
    };

    // Update db.json via PATCH
    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then((r) => r.json())
      .then((updatedData) => {
        const updatedGoals = goals.map((g) =>
          g.id === goalId ? updatedData : g
        );
        setGoals(updatedGoals);
      });
  }

  return (
    <div>
      <h1>My Savings Goals</h1>
      <div className="goals-grid">
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} onDeposit={handleDeposit} />
        ))}
      </div>
    </div>
  );
}

export default Home;
