import PopupWithForm from "./PopupWithForm";

function PopupEditCard({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="cards"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        id="input-place"
        type="text"
        name="name"
        required
        className="popup__value popup__value_field_place"
        placeholder="Place"
      />
      <span id="input-place-error" className="popup__error"></span>
      <input
        id="input-url"
        type="url"
        name="link"
        required
        className="popup__value popup__value_field_url"
        placeholder="URL"
      />
      <span id="input-url-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default PopupEditCard;
