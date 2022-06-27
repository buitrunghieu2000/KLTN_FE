import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../store/auth";
import "./style.css";
type Props = {};

const Navbar = (props: Props) => {
  const [stateAuth, actionAuth] = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    actionAuth.logoutAsync();
    history.push("/Login");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">
            {" "}
            <span className="logo">MarketPLHD</span>
          </Link>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}

          <div className="wrap_menuAvatar">
            <div className="iconAvatar">
              <img
                src={
                  stateAuth.auth?.user.avatar === "nope"
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                    : stateAuth.auth?.user.avatar
                }
                className="w-full h-full object-cover rounded-[50%] user_avatar"
                alt="avatar"
              />
            </div>
            <div className="wrap_contentHover">
              <div className="contentHover py-[16px]">
                <Link to="/personal" className="menuProfile menuLinkHover">
                  Thông tin cá nhân
                </Link>
                <div className="lineMenu"></div>
                <a
                  className="menuProfile menuLinkHover text-red-500 font-bold"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
