import React from "react";
import "./App.css";

import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Courses from "./Page/Courses/Courses";
import { Route, Switch } from "react-router-dom";
import Admission from "./Page/Admision/Admission";
import Contact from "./Page/Contact/Contact";
import VideosAbout from "./Components/Home/Videos/VideosAbout";
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
        <Route path="/contact" component={Contact} />

        <Route path="/videosPage" component={VideosAbout} />
      </Switch>
    </div>
  );
}

export default App;
