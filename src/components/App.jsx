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
import PopupWithImage from "./PopupWithImage";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [closeAllPopups, setCloseAllPopups] = React.useState("");

  return (
    <>
      <div className="App">
        <body class="main">
          <div className="page">
            <Header />
            <Main
              onAddPlace={setisAddPlacePopupOpen}
              onEditAvatar={setisEditAvatarPopupOpen}
              onEditProfile={setisEditProfilePopupOpen}
            />
            <Footer />
            <PopupWithForm
              onClose={closeAllPopups}
              setClosePopups={setCloseAllPopups}
            />
            <PopupEditAvatar isOpen={isEditAvatarPopupOpen} />
            <PopupEditCard isOpen={isAddPlacePopupOpen} />
            <PopupEditProfile isOpen={isEditProfilePopupOpen} />
            <PopupConfirmDeleteCard />
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
