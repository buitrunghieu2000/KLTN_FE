import React from "react";
import "./style.css";
type Props = {
  setStatusPost: React.Dispatch<React.SetStateAction<any>>;
};

const SelectBox = (props: Props) => {
  const { setStatusPost } = props;

  const handleSelect = (e: any) => {
    const value = Number(e.target.value);
    setStatusPost(value);
  };

  return (
    <div>
      <div className="select">
        <select name="format" id="format" onChange={handleSelect}>
          <option value="0">WAIT TO CONFIRM</option>
          <option value="2">DISPLAYING</option>
          <option value="3">LOCKED</option>
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
