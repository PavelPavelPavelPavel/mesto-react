import React from "react";
import api from "../utils/Api";
// import PopupEditAvatar from "./PopupEditAvatar";
// import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
// import PopupEditCard from "./PopupEditCard";
// import PopupEditProfile from "./PopupEditProfile";
// import PopupWithImage from "./PopupWithImage";
// import PopupWithForm from "./PopupWithForm";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState({});
  React.useEffect(() => {
    Promise.all([api.getInfo(), api.getInfoCards()])
      .then(([res, cards]) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, [userName, userDescription, userAvatar]);

  //console.log(cards);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <button className="profile__avatar-btn" onClick={onEditAvatar}>
              <img
                src={`${userAvatar}`}
                alt="Аватар пользователя"
                className="profile__avatar-img"
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
