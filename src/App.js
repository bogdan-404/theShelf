import NavBar from "./components/NavBar";
import { NavigationProvider } from "./context/navigation";
import "./App.css";

function App() {
  return (
    <NavigationProvider>
      <NavBar />
    </NavigationProvider>
  );
}

export default App;
