import classNames from "classnames";
import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import profile from "../assets/img/profile.svg";
import setIsAuth from "../redux/actionCreators/setIsAuth";

function DropProfile({ items }) {
  const [activeDrop, setActiveDrop] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const profileRef = useRef();

  const exit = () => {
    history.push("/login");
    dispatch(setIsAuth(false));
    localStorage.setItem("token", "");
    setActiveDrop(false);
  };
  const toggleDrop = () => {
    setActiveDrop(!activeDrop);
  };

  const changePage = (path) => {
    history.push(path);
    setActiveDrop(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!event.path.includes(profileRef.current)) {
        setActiveDrop(false);
      }
    });
  }, []);
  return (
    <div className="profile" ref={profileRef}>
      <div className="profile__button" onClick={toggleDrop}>
        <img src={profile} alt="Профиль" className="profile__img" />
      </div>
      <ul
        className={classNames("profile__list", {
          active: activeDrop,
        })}
      >
        {items.map((item, index) => {
          return (
            <li
              className="profile__item"
              onClick={() => changePage(item.path)}
              key={index}
            >
              {item.name}
            </li>
          );
        })}
        <li className="profile__item" onClick={exit}>
          Выйти
        </li>
      </ul>
    </div>
  );
}

export default DropProfile;
