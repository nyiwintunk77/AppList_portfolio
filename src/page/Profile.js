import React from "react";
import { withRouter } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  nyi: {
    name: "NYI",
    description: "トマトの新入社員",
  },
  tonaka: {
    name: "TONAKA",
    description: "トマトの課長",
  },
  lee: {
    name: "LEE",
    description: "トマトの新入社員",
  },
};

const Profile = ({ match }) => {
  console.log(match);
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>ユーザが存在しません。</div>;
  }

  const { name, description } = profile;

  return (
    <div>
      <h3>
        {username}({name})
      </h3>
      <p>{description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
