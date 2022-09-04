import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = ({ match }) => {
  return (
    <div>
      <h3>ユーザリスト：</h3>
      <ul>
        <li>
          <Link to="/profile/tonaka">
            {" "}
            <button>トナカさんのプロファイル</button>
          </Link>
        </li>
        <li>
          <Link to="/profile/nyi">
            {" "}
            <button>にーのプロファイル</button>
          </Link>
        </li>
        <li>
          <Link to="/profile/lee">
            {" "}
            <button>李さんのプロファイル</button>
          </Link>
        </li>
      </ul>

      <Route
        path="/profile"
        render={() => <div>ユーザーを選んでください。</div>}
        exact
      />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default withRouter(Profiles);
