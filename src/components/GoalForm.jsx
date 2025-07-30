function GoalForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" required />
      <input type="number" name="targetAmount" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Save Goal</button>
    </form>
  );
}

export default GoalForm;
