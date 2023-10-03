import "./index.css";
import Logo from "./images/logo.svg";

function App() {
  return (
    <>
      <div className="App">
        <body class="main">
          <div className="page">
            <header className="header">
              <img src={Logo} alt="Место" className="header__logo" />
            </header>
            <main className="content">
              <section className="profile">
                <div className="profile__info">
                  <div className="profile__avatar">
                    <button className="profile__avatar-btn">
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
                    ></button>
                    <p className="profile__work"></p>
                  </div>
                </div>
                <button
                  aria-label="Кнопка добавления фото"
                  type="button"
                  className="profile__add-button"
                ></button>
              </section>
              <section className="elements"></section>
            </main>
            <footer className="footer">
              <p className="footer__copyright">© 2020 Mesto Russia</p>
            </footer>
            <div className="popup popup_edit_form">
              <div className="popup__container">
                <button
                  aria-label="Кнопка закрытия попапа"
                  type="button"
                  className="popup__button-close"
                ></button>
                <div className="popup__form popup__form_edit_profile">
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <form
                    name="profile"
                    className="popup__input-wrapper popup__input-profile"
                  >
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      required
                      className="popup__value popup__value_field_name"
                      placeholder="Name"
                    />
                    <span id="input-name-error" className="popup__error"></span>
                    <input
                      id="input-job"
                      type="text"
                      name="job"
                      required
                      className="popup__value popup__value_field_work"
                      placeholder="About me"
                    />
                    <span id="input-job-error" className="popup__error"></span>
                    <button
                      type="submit"
                      className="popup__button popup__button-profile"
                    >
                      Сохранить
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="popup popup_edit_cards">
              <div className="popup__container">
                <button
                  aria-label="Кнопка закрытия попапа"
                  type="button"
                  className="popup__button-close"
                ></button>
                <div className="popup__form popup__form_edit_cards">
                  <h2 className="popup__title">Новое место</h2>
                  <form
                    name="card"
                    className="popup__input-wrapper popup__input-card"
                  >
                    <input
                      id="input-place"
                      type="text"
                      name="name"
                      required
                      className="popup__value popup__value_field_place"
                      placeholder="Place"
                    />
                    <span
                      id="input-place-error"
                      className="popup__error"
                    ></span>
                    <input
                      id="input-url"
                      type="url"
                      name="link"
                      required
                      className="popup__value popup__value_field_url"
                      placeholder="URL"
                    />
                    <span id="input-url-error" className="popup__error"></span>
                    <button
                      type="submit"
                      className="popup__button popup__button-card popup__button_disabled"
                      disabled
                    >
                      Создать
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
            <div className="popup popup_edit_delete-card">
              <div className="popup__container">
                <button
                  aria-label="Кнопка закрытия попапа"
                  type="button"
                  className="popup__button-close"
                ></button>
                <div className="popup__form popup__form_edit_delete-card">
                  <h2 className="popup__title">Вы уверены?</h2>
                  <button
                    type="button"
                    className="popup__button popup__button-confirm"
                  >
                    Да
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
