import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContexts";
import BudgetCart from "./BudgetCart";

export default function UncategorizedBudgetCart(props) {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if (amount === 0) return null;
  return <BudgetCart name="Uncategorized" amount={amount} gray {...props} />;
}
