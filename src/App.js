import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Ordering/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "./Components/Table/Table";
import Toogles from "./Components/Ordering/Toogles";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/table" exact component={Table} />
          <Route path="/Slide" exact component={Toogles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
