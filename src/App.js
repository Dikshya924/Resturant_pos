import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Ordering/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TableUI from "./Components/Table/TableUI";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/table" component={TableUI} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
