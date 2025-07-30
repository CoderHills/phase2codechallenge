import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import GoalForm from "../components/GoalForm";

function EditGoal() {
  const { id } = useParams();
  const { goals, setGoals } = useOutletContext();
  const navigate = useNavigate();
  const goal = goals.find((g) => g.id === id);
  const [formData, setFormData] = useState(goal || {});

  useEffect(() => {
    if (goal) setFormData(goal);
  }, [goal]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((updatedGoal) => {
        setGoals((goals) => goals.map((g) => (g.id === id ? updatedGoal : g)));
        navigate("/");
      });
  }

  if (!goal) return <h2>Loading...</h2>;

  return <GoalForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default EditGoal;
