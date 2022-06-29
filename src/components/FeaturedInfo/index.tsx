import React from "react";
import "./style.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { moneyFormater } from "../../utils/moneyFormater";
type Props = {
  totalUser: number;
  totalRevanue: number;
  totalPost: number;
};

const FeauturedInfo = (props: Props) => {
  const { totalUser, totalPost, totalRevanue } = props;
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{moneyFormater(totalRevanue)}</span>
          <span className="featuredMoneyRate">
            -50.000 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalUser}</span>
          <span className="featuredMoneyRate">
            -5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Post</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalPost}</span>
          <span className="featuredMoneyRate">
            +3 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeauturedInfo;
