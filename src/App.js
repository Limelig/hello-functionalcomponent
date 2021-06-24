import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
            클래스 컴포넌트 테스트
          </Route>          
          <Route path="/hellofunctional" exact={true}>
            함수형 컴포넌트 테스트
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
