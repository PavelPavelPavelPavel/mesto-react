function PopupWithImage() {
  return (
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
  );
}

export default PopupWithImage;
