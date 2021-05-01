import "./App.css";
<<<<<<< HEAD
// import Home from "./Page/Home/Home";
import About from './Page/About/About'
function App() {
  return (
    <div>
      <About />
=======

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

>>>>>>> 83eee4a18f6d6be823a23fa15b5164c3a43a5e42
    </div>
  );
}

export default App;
