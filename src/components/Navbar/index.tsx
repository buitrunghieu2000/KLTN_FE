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
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {/* <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          /> */}
          <div className="wrap_menuAvatar">
            <div className="iconAvatar">
              <img
                // src={stateAuth.auth ? stateAuth.auth.avatar : DEFAULT_AVATAR}
                src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/134454217_2852424525075613_6158247242724837492_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=Ya9nhauGKLYAX97Kod5&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT_T4VaGY04lpzSwagxghy1OmuEJ9UE-KicN8jwgUQElHQ&oe=62ABD617"
                className="w-full h-full object-cover rounded-[50%] user_avatar"
                alt="avatar"
              />
            </div>
            <div className="wrap_contentHover">
              <div className="contentHover py-[16px]">
                <Link to="/personal" className="menuProfile menuLinkHover">
                  Thông tin cá nhân
                </Link>
                <Link
                  to="/thong-tin-ca-nhan"
                  className="menuProfile menuLinkHover"
                >
                  Tin nhắn
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
