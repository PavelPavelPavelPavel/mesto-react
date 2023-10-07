import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
import PopupEditCard from "./PopupEditCard";
import PopupEditProfile from "./PopupEditProfile";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleClose() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
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
            />
            <Footer />
            {/* <PopupWithForm onClose={handleClose} /> */}
            <PopupEditAvatar
              isOpen={isEditAvatarPopupOpen}
              onClose={handleClose}
            />
            <PopupEditCard isOpen={isAddPlacePopupOpen} onClose={handleClose} />
            <PopupEditProfile
              isOpen={isEditProfilePopupOpen}
              onClose={handleClose}
            />
            <PopupConfirmDeleteCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
