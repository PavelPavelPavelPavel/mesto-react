// const handleEditAvatarClick = () => {
//   const avatar = document.querySelector(".popup_edit_avatar");
//   console.log(avatar);
//   avatar.classList.add("popup_opened");
// };

// const handleEditProfileClick = () => {
//   const profile = document.querySelector(".popup_edit_form");
//   console.log(profile);
//   profile.classList.add("popup_opened");
// };

// const handleAddPlaceClick = () => {
//   const card = document.querySelector(".popup_edit_cards");
//   console.log(card);
//   card.classList.add("popup_opened");
// };

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <button
              className="profile__avatar-btn"
              //onClick={handleEditAvatarClick}
            >
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
              //onClick={handleEditProfileClick}
            ></button>
            <p className="profile__work"></p>
          </div>
        </div>
        <button
          aria-label="Кнопка добавления фото"
          type="button"
          className="profile__add-button"
          //onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>

      <div className="popup popup_edit_img">
        <figure className="popup__figure popup__figure-image">
          <button
            aria-label="Кнопка закрытия попапа"
            type="button"
            className="popup__button-close"
          ></button>
          <img src="#" alt="" className="popup__img" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </main>
  );
}

export default Main;
