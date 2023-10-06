import React from "react";
// import PopupEditAvatar from "./PopupEditAvatar";
// import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
// import PopupEditCard from "./PopupEditCard";
// import PopupEditProfile from "./PopupEditProfile";
// import PopupWithImage from "./PopupWithImage";
//import PopupWithForm from "./PopupWithForm";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <button className="profile__avatar-btn" onClick={onEditAvatar}>
              <img
                src="#"
                alt="Аватар пользователя"
                className="profile__avatar-img"
              />
            </button>
          </div>
          <div className="profile__info-text">
            <h1 className="profile__name"></h1>
            <button
              aria-label="Кнопка редактирования профиля"
              type="button"
              className="profile__button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__work"></p>
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
