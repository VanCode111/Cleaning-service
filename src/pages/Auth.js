import { point } from "leaflet-rotate-map";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import setIsAuth from "../redux/actionCreators/setIsAuth";

function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = history.location.pathname === "/login";

  const setAuth = (isAuth) => {
    dispatch(setIsAuth(isAuth));
  };
  return (
    <div className="auth">
      <div className="auth__block">
        <h4 className="auth__title">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h4>
        <form action="" className="auth__form">
          <input
            type="text"
            placeholder="Введите e-mail"
            className="input auth__input"
          />
          <input
            type="password"
            placeholder="Введите пароль"
            className="input auth__input"
          />
          <Link to="/">
            <button
              style={{ cursor: "pointer" }}
              onClick={() => setAuth(true)}
              className="button button_color_blue auth__button"
            >
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
          </Link>
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
