import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./layout/header";
import Footer from "./layout/footer";

import Home from "./Home";
import Search from "./github-search/Search";
import NewsPortal from "./news-portal/news-portal";
import Examples from "./demo/examples";
import User from "./user/user";
import LoginComponent from "./login-component";
import RegisterComponent from "./register-component";
import QuizComponent from "./quiz-portal/quiz-component";
import WeatherComponent from "./weather-app/weather-component";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br />
        <hr />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/news" component={NewsPortal} />
            <Route path="/examples" component={Examples} />
            {/* <Route
              path="/quiz"
              component={() => <User firstName="rabbani" />}
            /> */}
            <Route path="/quiz" component={QuizComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/weather" component={WeatherComponent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
