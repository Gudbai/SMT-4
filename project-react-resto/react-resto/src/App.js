import Nav from './Front/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Front from "./Front/Front";
import Back from "./Back/Back";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Front} exact />
        <Route path="/home" component={Front} />
        <Route path="/admin" component={Back} />
      </Router>
    </div>
  );
}

export default App;
