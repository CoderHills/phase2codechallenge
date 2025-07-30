function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const completedGoals = goals.filter((goal) => goal.savedAmount >= goal.targetAmount).length;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completedGoals}</p>
    </div>
  );
}

export default Overview;
