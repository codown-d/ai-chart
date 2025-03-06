import "./App.css";
import { GlobalProvider } from "./hooks/GlobalContext";
import Independent from "./Independent";

function App() {
  return (
    <GlobalProvider>
      <Independent />
    </GlobalProvider>
  );
}

export default App;
