import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        id="input-url-avatar"
        type="url"
        name="link"
        required
        className="popup__value popup__value_field_url"
        placeholder="URL"
      />
      <span id="input-url-avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;
