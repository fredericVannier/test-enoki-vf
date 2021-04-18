import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";
import AssetsPage from "./pages/assets/assets-page.component";
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
      <Route exact path="/assets" component={AssetsPage} />
      </Switch>
    </div>
  );
}

export default App;
