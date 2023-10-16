import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
import PopupEditCard from "./PopupEditCard";
import PopupEditProfile from "./PopupEditProfile";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    state: false,
    name: "",
    link: "",
  });
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getInfo(), api.getInfoCards()])
      .then(([res, card]) => {
        setCurrentUser(res);
        setCards(card);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser({ name, about }) {
    api.setUserData({ name, about }).then((res) => {
      setCurrentUser(res);
    });
  }

  function handleUpdateAvatar({ avatar }) {
    api.setUserAvatar(avatar).then((res) => {
      setCurrentUser(res);
    });
  }
  function handleCardClick({ name, link }) {
    setSelectedCard({
      state: true,
      name: `${name}`,
      link: `${link}`,
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          cards,
          handleCardClick,
        }}
      >
        <div className="App">
          <div className="main">
            <div className="page">
              <Header />
              <Main
                onAddPlace={setIsAddPlacePopupOpen}
                onEditAvatar={setIsEditAvatarPopupOpen}
                onEditProfile={setIsEditProfilePopupOpen}
                onClose={closeAllPopups}
              />
              <Footer />
            </div>
          </div>
          <PopupEditAvatar
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupEditCard
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
          <PopupEditProfile
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupConfirmDeleteCard />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
