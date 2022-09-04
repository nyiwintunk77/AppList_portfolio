import React, { useEffect } from "react";

const HistorySample = ({ history }) => {
  const onBack = () => {
    history.goBack();
  };

  const onHome = () => {
    history.push("/");
  };
  const onForward = () => {
    history.goForward();
  };

  useEffect(() => {
    const unblock = history.block("移動しますか？");
    return () => {
      if (unblock) {
        unblock();
      }
    };
  }, [history]);

  return (
    <div>
      <button onClick={onBack}>戻る</button>
      <button onClick={onHome}>ホームへ</button>
      <button onClick={onForward}>進む</button>
    </div>
  );
};

export default HistorySample;
