import React from "react";
import authApi from "../../api/auth/authApi";
import useAuth from "../../store/auth";
import "./style.css";
type Props = {};

function PersonalPage({}: Props) {
  const [stateAuth] = useAuth();

  return (
    <div className="box">
      <img
        src={
          stateAuth.auth?.user.avatar === "nope"
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
            : stateAuth.auth?.user.avatar
        }
        alt=""
        className="box-img"
      />
      <h1>{stateAuth.auth?.user?.name}</h1>
      <h5>{stateAuth.auth?.user?.phone}</h5>
      <p style={{ textAlign: "center" }}>A web site developer.</p>
      <ul>
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PersonalPage;
