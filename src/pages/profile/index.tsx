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
        src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/134454217_2852424525075613_6158247242724837492_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=Ya9nhauGKLYAX97Kod5&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT_T4VaGY04lpzSwagxghy1OmuEJ9UE-KicN8jwgUQElHQ&oe=62ABD617"
        alt=""
        className="box-img"
      />
      <h1>{stateAuth.auth?.user?.name}</h1>
      <h5>{stateAuth.auth?.user?.phone}</h5>
      <p>
        A web developer is a programmer who specializes in, or is specifically
        engaged in, the development of World Wide Web applications, or
        applications that are run over HTTP from a web server to a web browser.
      </p>
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
