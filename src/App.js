import "./App.css";

import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Courses from "./Page/Courses/Courses";
import { Route, Switch } from "react-router-dom";
import Admission from "./Page/Admision/Admission";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <About /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/admission" component={Admission} />
        {/* <Route path="/admission" component={Admission} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  );
}

export default App;
