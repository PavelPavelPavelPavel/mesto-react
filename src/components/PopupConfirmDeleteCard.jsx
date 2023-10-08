import PopupWithForm from "./PopupWithForm";

function PopupConfirmDeleteCard() {
  return (
    <PopupWithForm name="delete-cards" title="Вы уверены?" buttonText="Да" />
  );
}

export default PopupConfirmDeleteCard;
