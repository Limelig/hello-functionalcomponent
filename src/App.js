import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HelloClass } from "./HelloClass/HelloClass";
import { HelloFunction } from "./HelloFunction/HelloFunction";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">홈페이지</Link>
          </li>
          <li>
            <Link to="/helloClass">클래스 컴포넌트 테스트</Link>
          </li>
          <li>
            <Link to="/hellofunctional">함수형 컴포넌트 테스트</Link>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            홈페이지ㅣ
          </Route>
          <Route path="/helloClass" exact={true}>
            <HelloClass>클래스 컴포넌트 카운터</HelloClass>
          </Route>
          <Route path="/hellofunctional" exact={true}>
            <HelloFunction>함수형 컴포넌트 카운터</HelloFunction>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
