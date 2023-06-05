import "./App.css";
import StartupPage from "./pages/StartupPage";
import BooksPage from "./pages/BooksPage";
import MoviesPage from "./pages/MoviesPage";
import Route from "./components/Route"
import NavBar from "./components/NavBar";
import { NavigationProvider } from "./context/navigation";

function App() {

  return (
    <div>
      <NavigationProvider>
        <NavBar />
        <div>
          <Route path="/startup">
            <StartupPage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
        </div>
      </NavigationProvider>
    </div>
  );
}

export default App;
