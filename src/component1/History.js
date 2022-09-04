import React from "react";

const HistoryList = ({ his }) => {
  const { id, text } = his;
  return (
    <div>
      {console.log("his" + his.text)}
      {his ? <div>aaa</div> : null}
    </div>
  );
};

const History = ({ history }) => {
  return (
    <div>
      {history.map((his) => (
        <HistoryList his={his} key={his.id} />
      ))}
    </div>
  );
};

export default History;
