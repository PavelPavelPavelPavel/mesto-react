import { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
import AddPlacePopup from "./AddPlacePopup";
import PopupEditProfile from "./PopupEditProfile";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    state: false,
    name: " ",
    link: " ",
  });
  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });
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
    api
      .setUserData(name, about)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .setNewCard(newCard.link, newCard.name)
      .then((res) => {
        setCards([res, ...cards]);
      })
      .catch((err) => console.log(err));
  }

  function handleApiLikeRequest(id, newCard) {
    setCards((state) => state.map((c) => (c._id === id ? newCard : c)));
  }

  function handleCardLike(id, isLiked) {
    api
      .addLikeToCard(id, !isLiked)
      .then((newCard) => {
        handleApiLikeRequest(id, newCard);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDislike(id, isLiked) {
    api
      .deleteResponseLike(id, !isLiked)
      .then((newCard) => {
        handleApiLikeRequest(id, newCard);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(id) {
    api
      .deleteResponse(id)
      .then(() => {
        const res = cards.filter((card) => {
          return card._id !== id;
        });
        setCards(res);
      })
      .catch((err) => console.log(err));
  }

  function handleCardClick({ name, link }) {
    setSelectedCard({
      state: true,
      name: `${name}`,
      link: `${link}`,
    });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      state: false,
      name: " ",
      link: " ",
    });
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
                onCardLike={handleCardLike}
                onCardDisLike={handleCardDislike}
                onCardDelete={handleCardDelete}
                cards={cards}
              />
              <Footer />
            </div>
          </div>
          <PopupEditAvatar
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
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
