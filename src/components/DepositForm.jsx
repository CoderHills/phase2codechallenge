import { useState } from "react";

function DepositForm({ onDeposit }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onDeposit(Number(amount));
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Deposit Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
