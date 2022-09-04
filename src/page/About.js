import QueryString from "qs";
import React from "react";

const About = ({ location }) => {
  const query = QueryString.parse(location.search, { ignoreQueryPrefix: true });

  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>紹介</h1>
      <p>ここは紹介ページです。</p>
      {showDetail && <p>Detailをtrueに設定しました。</p>}
    </div>
  );
};

export default About;
