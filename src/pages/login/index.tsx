import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../store/auth";
import { notifyError, notifySuccess } from "../../utils/notify";
import { signInSchema } from "../../validate/auth";
import "./style.css";

const Login = () => {
  const [, actionAuth] = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const submit = async (data: any, e: any) => {
    e.preventDefault();
    const result = await actionAuth.loginAsync(data);
    if (!result) notifyError("Sai tài khoản hoặc mật khẩu");
    else {
      notifySuccess("Đăng nhập thành công");
      history.push("/");
    }
  };

  return (
    <div className="wrapper">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="txt_field">
            <input type="text" {...register("email")} required />

            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" {...register("password")} required />

            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />

          <div className="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
