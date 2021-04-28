import "./App.css";

import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <About /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/admission" component={Admission} />
        <Route path="/courses" component={Courses} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  );
}

export default App;
