import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENT IMPORTS
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
