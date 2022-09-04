import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #c08374;
  border: 1px solid #a76358;

  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }

  ul {
    list-style: none;
    display: inline-block;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  ul li {
    float: left;
    margin: 0 20px;
  }

  li button {
    border: none;
    border-radius: 8px;
    padding: 19px 39px;
    text-align: center;
    display: inline-block;
    margin: 4px 2px;
  }

  li button:hover {
    background-color: #ffc0cb;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Wrapper>
        <ul>
          <li>
            <Link to="/">
              {" "}
              <button>ホーム</button>
            </Link>
          </li>

          <li>
            <Link to="/applist">
              {" "}
              <button>アプリ</button>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </HeaderBlock>
  );
};

export default Header;
