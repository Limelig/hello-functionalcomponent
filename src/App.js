import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HelloClass } from "./HelloClass/HelloClass";
import { HelloFunction } from "./HelloFunction/HelloFunction";
import { PropsDrilling } from "./PropsDrilling/PropsDrilling";
import { Element, HelloJsx } from "./HelloJsx/HelloJsx";
import { ContextAPITest } from "./ContextAPITest/ContextAPITest";
import { ContextAPITest4Class } from "./ContextAPITest4Class/ContextAPITest4Class";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">jsx</Link>
          </li>
          <li>
            <Link to="/helloClass">클래스 컴포넌트 테스트</Link>
          </li>
          <li>
            <Link to="/hellofunctional">함수형 컴포넌트 테스트</Link>
          </li>
          <li>
            <Link to="/propsdrilling">props drilling 확인</Link>
          </li>
          <li>
            <Link to="/contextapitest">Context API 확인</Link>
          </li>
          <li>
            <Link to="/contextapi4class">Context API for Class</Link>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Element />
            <HelloJsx />
          </Route>
          <Route path="/helloClass" exact={true}>
            <HelloClass>클래스 컴포넌트 카운터</HelloClass>
          </Route>
          <Route path="/hellofunctional" exact={true}>
            <HelloFunction>함수형 컴포넌트 카운터</HelloFunction>
          </Route>
          <Route path="/propsdrilling" exact={true}>
            <PropsDrilling>PropsDrilling 확인</PropsDrilling>
          </Route>
          <Route path="/contextapitest" exact={true}>
            <ContextAPITest>Context API 확인</ContextAPITest>
          </Route>
          <Route path="/contextapi4class" exact={true}>
            <ContextAPITest4Class>Context API Class 확인</ContextAPITest4Class>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
