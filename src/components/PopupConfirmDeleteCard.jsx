import PopupWithForm from "./PopupWithForm";

function PopupConfirmDeleteCard(/*{ isOpen, onClose }*/) {
  return (
    <PopupWithForm
      name="delete-cards"
      title="Вы уверены?"
      buttonText="Да"
      //  isOpen={isOpen}
      // onClose={onClose}
    />
  );
}

export default PopupConfirmDeleteCard;
