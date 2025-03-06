import "./App.css";
import { GlobalProvider } from "./hooks/GlobalContext";
import Independent from "./Independent";

function App() {
  return (
    <GlobalProvider>

      <div className="flex items-center justify-center h-full">
        <div className="w-[1000px]">
          <Independent />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
