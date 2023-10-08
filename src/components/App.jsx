import React from "react";
import { useState } from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
import PopupEditCard from "./PopupEditCard";
import PopupEditProfile from "./PopupEditProfile";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    state: false,
    name: "",
    link: "",
  });

  function handleCardClick({ name, link }) {
    setSelectedCard({ state: true, name: `${name}`, link: `${link}` });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="App">
        <div className="main">
          <div className="page">
            <Header />
            <Main
              onAddPlace={setIsAddPlacePopupOpen}
              onEditAvatar={setIsEditAvatarPopupOpen}
              onEditProfile={setIsEditProfilePopupOpen}
              onCardClick={handleCardClick}
              onClose={closeAllPopups}
            />
            <Footer />
          </div>
        </div>
        <PopupEditAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupEditCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <PopupEditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupConfirmDeleteCard />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
