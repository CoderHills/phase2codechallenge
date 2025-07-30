import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function AddGoal() {
  const { goals, setGoals } = useOutletContext();
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: 0,
    category: "",
    deadline: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: parseFloat(formData.savedAmount),
      createdAt: new Date().toISOString(),
      id: crypto.randomUUID()
    };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal)
    })
      .then(r => r.json())
      .then(data => {
        setGoals([...goals, data]);
        navigate("/");
      });
  }

  return (
    <div className="add-goal-form">
      <h1>Add New Goal</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Target Amount</label>
        <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} required />

        <label>Category</label>
        <input name="category" value={formData.category} onChange={handleChange} required />

        <label>Deadline</label>
        <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />

        <button type="submit">Save Goal</button>
      </form>
    </div>
  );
}

export default AddGoal;
