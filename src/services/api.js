const API_URL = "http://localhost:3000/goals";

export async function getGoals() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createGoal(goal) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  return res.json();
}

export async function updateGoal(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteGoal(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
