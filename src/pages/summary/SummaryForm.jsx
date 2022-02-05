import React, { useState } from "react";

const SummaryForm = () => {
  const [isChkBxChecked, setIsChkBxChecked] = useState(false);

  const onCheck = (e) => {
    setIsChkBxChecked((prev) => !prev);
  };

  return (
    <div>
      <label>
        <input type={"checkbox"} onChange={onCheck}></input>
        {"Terms and Conditions"}
      </label>
      <button disabled={!isChkBxChecked}>{`Confirm Order`}</button>
    </div>
  );
};

export default SummaryForm;
