import React from "react";
import "./style.css";
type Props = {
  setActive: React.Dispatch<React.SetStateAction<any>>;
};

const BoxUserSelect = (props: Props) => {
  const { setActive } = props;

  const handleSelect = (e: any) => {
    const value = e.target.value;
    setActive(value);
  };

  return (
    <div>
      <div className="select">
        <select name="format" id="format" onChange={handleSelect}>
          <option value="active">ACTIVE USER</option>
          <option value="lock">LOCK USER</option>
        </select>
      </div>
    </div>
  );
};

export default BoxUserSelect;
