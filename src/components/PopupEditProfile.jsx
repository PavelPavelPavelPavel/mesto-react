import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
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
    </PopupWithForm>
  );
}

export default PopupEditProfile;
