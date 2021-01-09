import LoginPage from "./pages/login"
import ItemComponent from "./pages/item"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container mt-1">
      <Switch>
          <Route exact path="/">
          <ItemComponent/>
          </Route>
      <div className="row">
        <div className="col-4">
          <Route path="/login">
            <LoginPage/>
          </Route>
        </div>
      </div>
      </Switch>
    </div>
  );
}

export default App;
