import { point } from "leaflet-rotate-map";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import setIsAuth from "../redux/actionCreators/setIsAuth";
import setUser from "../redux/actionCreators/setUser";
import { registration, login } from "../http/userAPI";

function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = async () => {
    try {
      let response;
      if (isLogin) {
        response = await login(email, password);
      } else {
        response = await registration(email, password);
      }
      dispatch(setIsAuth(true));
      history.push("/order");
      dispatch(setUser(response));
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  const isLogin = history.location.pathname === "/login";

  return (
    <div className="auth">
      <div className="auth__block">
        <h4 className="auth__title">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h4>
        <form className="auth__form">
          <label htmlFor="" className="auth__error-label">
            {error}
          </label>
          <input
            type="text"
            placeholder="Введите e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input auth__input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className="input auth__input"
          />
          <button
            type="button"
            style={{ cursor: "pointer" }}
            onClick={authenticate}
            className="button button_color_blue auth__button"
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
        {isLogin ? (
          <div className="auth__bottom">
            <span>Нет аккаунта?</span>
            <Link to="/registration" className="auth__link">
              Зарегистрироваться
            </Link>
          </div>
        ) : (
          <div className="auth__bottom">
            <span>Есть аккаунт?</span>
            <Link to="/login" className="auth__link">
              Войти
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
