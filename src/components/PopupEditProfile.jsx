import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({ isOpen }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
    >
      <input
        id="input-name"
        type="text"
        name="name"
        required
        class="popup__value popup__value_field_name"
        minlength="2"
        maxlength="40"
        placeholder="Name"
      />
      <span id="input-name-error" class="popup__error"></span>
      <input
        id="input-job"
        type="text"
        name="job"
        required
        class="popup__value popup__value_field_work"
        minlength="2"
        maxlength="200"
        placeholder="About me"
      />
      <span id="input-job-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default PopupEditProfile;
