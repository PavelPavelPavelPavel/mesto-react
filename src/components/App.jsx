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
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [closeAllPopups, setCloseAllPopups] = React.useState();

  function handleClose() {
    console.log("click");
  }

  return (
    <>
      <div className="App">
        <div className="main">
          <div className="page">
            <Header />
            <Main
              onAddPlace={setisAddPlacePopupOpen}
              onEditAvatar={setisEditAvatarPopupOpen}
              onEditProfile={setisEditProfilePopupOpen}
            />
            <Footer />
            <PopupWithForm setCloseAllPopups={handleClose} />
            <PopupEditAvatar
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            />
            <PopupEditCard
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
            />
            <PopupEditProfile
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
            />
            <PopupConfirmDeleteCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
