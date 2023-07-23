import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetsProvider } from "./contexts/BudgetsContexts";

import Budget from "./components/Budget";

function App() {
  return (
    <BudgetsProvider>
      <Budget />
    </BudgetsProvider>
  );
}

export default App;
