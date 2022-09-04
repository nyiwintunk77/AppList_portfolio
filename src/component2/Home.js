import React from "react";
import styled from "styled-components";

const HomeBlock = styled.div`
  padding-top: 10rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
const Home = () => {
  return (
    <HomeBlock>
      <h2>Warmly Welcome!!</h2>
    </HomeBlock>
  );
};

export default Home;
