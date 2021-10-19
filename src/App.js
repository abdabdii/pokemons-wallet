import { Home } from "./components/Home";
import {
  BrowserRouter as Router,Switch,Route
  
} from "react-router-dom";
import PokemonsProvider from "./components/providers/PokemonsProvider";
import { Local } from "./components/Local";

function App() {
  
  
  return (
  
    <Router>
      <PokemonsProvider>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/local'>
            <Local />
          </Route>

        </Switch>
      </PokemonsProvider>
    </Router>
    
 
  );
}

export default App;
