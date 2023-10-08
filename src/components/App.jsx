import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
import PopupEditCard from "./PopupEditCard";
import PopupEditProfile from "./PopupEditProfile";
import PopupWithImage from "./PopupWithImage";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    state: false,
    name: "",
    link: "",
  });

  function handleCardClick({ name, link }) {
    setSelectedCard({ state: true, name: `${name}`, link: `${link}` });
  }

  function handleClose() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
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
              onClose={handleClose}
            />
            <Footer />
          </div>
        </div>
        <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={handleClose} />
        <PopupEditCard isOpen={isAddPlacePopupOpen} onClose={handleClose} />
        <PopupEditProfile
          isOpen={isEditProfilePopupOpen}
          onClose={handleClose}
        />
        <PopupConfirmDeleteCard />
        <PopupWithImage card={selectedCard} onClose={handleClose} />
      </div>
    </>
  );
}

export default App;
