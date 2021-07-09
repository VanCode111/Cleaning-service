import React from "react";
import logo from "../assets/img/logos.svg";
import logoMobile from "../assets/img/logo-mobile.svg";
import { Link } from "react-router-dom";
import DropProfile from "./DropProfile";
import { useSelector, useDispatch } from "react-redux";
import setIsAuth from "../redux/actionCreators/setIsAuth";

function Navbar() {
  const { isAuth } = useSelector(({ userStore }) => userStore);
  const dispatch = useDispatch();

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <Link to="/">
            <picture>
              <source
                className="navbar__logo"
                srcset={logoMobile}
                media="(max-width: 800px)"
              />
              <img className="navbar__logo" src={logo} alt="Логотип" />
            </picture>
          </Link>
          <div className="navbar__right">
            {!isAuth ? (
              <Link
                to="/login"
                className="button button_color_blue navbar__auth"
              >
                Войти
              </Link>
            ) : (
              <DropProfile
                items={[
                  { name: "Профиль", path: "/profile" },
                  { name: "Мои уборки", path: "/orders" },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
