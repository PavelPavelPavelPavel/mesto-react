import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar({ isOpen }) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
    >
      <input
        id="input-url-avatar"
        type="url"
        name="link"
        required
        class="popup__value popup__value_field_url"
        placeholder="URL"
      />
      <span id="input-url-avatar-error" class="popup__error"></span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;
