import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
