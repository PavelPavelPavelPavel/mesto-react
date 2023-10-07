import React from "react";
import api from "../utils/Api";
// import PopupEditAvatar from "./PopupEditAvatar";
// import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
// import PopupEditCard from "./PopupEditCard";
// import PopupEditProfile from "./PopupEditProfile";
// import PopupWithImage from "./PopupWithImage";
// import PopupWithForm from "./PopupWithForm";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  React.useEffect(() => {
    Promise.all([api.getInfo()])
      .then(([res]) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <button className="profile__avatar-btn" onClick={onEditAvatar}>
              <img
                //src={`url(${userAvatar})`}
                alt="Аватар пользователя"
                className="profile__avatar-img"
                style={{ backgroundImage: `url(${userAvatar})` }}
              />
            </button>
          </div>
          <div className="profile__info-text">
            <h1 className="profile__name">{`${userName}`}</h1>
            <button
              aria-label="Кнопка редактирования профиля"
              type="button"
              className="profile__button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__work">{`${userDescription}`}</p>
          </div>
        </div>
        <button
          aria-label="Кнопка добавления фото"
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
