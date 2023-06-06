import "./App.css";
import StartupPage from "./pages/StartupPage";
import BooksPage from "./pages/BooksPage";
import MoviesPage from "./pages/MoviesPage";
import Route from "./components/Route"
import NavBar from "./components/NavBar";
import AddMovieForm from "./components/AddMovieForm";
import EditMovieForm from "./components/EditMovieForm";
import { NavigationProvider } from "./context/navigation";
import { MoviesProvider } from "./context/movies";


function App() {

  return (
    <div>
      <NavigationProvider>
        <NavBar />
        <Route path="/startup">
          <StartupPage />
        </Route>
        <Route path="/books">
          <BooksPage />
        </Route>

        <MoviesProvider>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/add-movie">
            <AddMovieForm />
          </Route>
          <Route path="/:id">
            <EditMovieForm />
          </Route>
        </MoviesProvider>

      </NavigationProvider>
    </div>
  );
}

export default App;
