import "./App.css";
import StartupPage from "./pages/StartupPage";
import BooksPage from "./pages/BooksPage";
import MoviesPage from "./pages/MoviesPage";
import Route from "./components/Route"
import NavBar from "./components/NavBar";
import { NavigationProvider } from "./context/navigation";
import { MoviesProvider } from "./context/movies";
import { Container } from "@mui/material";

import AddMovieForm from "./components/AddMovieForm";

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

        <Route path="/movies">
          <MoviesProvider>
            <MoviesPage />
          </MoviesProvider>
        </Route>

        <Route path="/add-movie">
          <MoviesProvider>
            <AddMovieForm />
          </MoviesProvider>
        </Route>

      </NavigationProvider>
    </div>
  );
}

export default App;
