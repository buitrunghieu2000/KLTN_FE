import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { notifySuccess } from "../../utils/notify";
import "./style.css";
type Props = {};

const TransactionSuccess = (props: Props) => {
  const [click, setClick] = useState(1);
  React.useEffect(() => {
    notifySuccess("Thanh toan thanh cong");
  });
  return (
    <div className="transactionWrapper">
      <div className="transactionContainer">
        <div className="transactionHeader">
          <div className="transactionHeaderLeft">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <div className="transactionHeaderRight">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="transactionBody">
          <p>Your Payment is Successfull</p>
          <p>THANK YOU</p>
          <button className="btnTransaction">Back to home</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccess;
