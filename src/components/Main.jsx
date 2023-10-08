import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import { useEffect, useState } from "react";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getInfo(), api.getInfoCards()])
      .then(([res, card]) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
        setCards(card);
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
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
