import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import HeaderHorizontal from "./components/header/Header-horizontal.component"

function App() {
  return (
    <div className="App">
    <div className='test'>
    <HeaderHorizontal />
    </div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
