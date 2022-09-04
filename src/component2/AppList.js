import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppListBlock = styled.div`
  padding-top: 7rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }
  ul.a {
    list-style-type: square;
  }
  ul li {
    margin: 0 20px 20px 0;
    vertical-align: top;
  }
`;

const BackBlock = styled.div`
  text-decoration: underline;
  cursor: pointer;
  background: none !important;
  border: none;
  padding: 0 !important;
  font-family: arial, sans-serif;
  color: #069;
`;

const AppList = () => {
  const [show, setShow] = useState(true);

  const onClick = () => {
    setShow(!show);
  };
  return (
    <AppListBlock>
      {!show && (
        <Link to="/applist">
          <BackBlock onClick={onClick}>アプリリストへ</BackBlock>
        </Link>
      )}
      {show && <h3>アプリリストは以下のようになります。</h3>}
      {show && (
        <ul className="a">
          <li>
            <Link to="/applist/todolist">
              {" "}
              <button onClick={onClick}>Todo List</button>
            </Link>
          </li>
          <li>
            <Link to="/applist/kuku">
              {" "}
              <button onClick={onClick}>九九ゲーム</button>
            </Link>
          </li>
          <li>
            <Link to="/applist/newsviewer">
              {" "}
              <button onClick={onClick}>ニュースビュアー</button>
            </Link>
          </li>
        </ul>
      )}
    </AppListBlock>
  );
};

export default AppList;
