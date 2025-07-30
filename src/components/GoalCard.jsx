// components/GoalCard.js
import { useState } from "react";

function GoalCard({ goal, onDeposit }) {
  const [depositAmount, setDepositAmount] = useState("");

  function handleDeposit() {
    const amount = parseFloat(depositAmount);
    if (amount > 0) {
      onDeposit(goal.id, amount);
      setDepositAmount(""); // Clear input
    }
  }

  return (
    <div className="goal-card">
      <h2>{goal.name}</h2>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${(goal.savedAmount / goal.targetAmount) * 100}%`,
          }}
        ></div>
      </div>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default GoalCard;
