import PopupWithForm from "./PopupWithForm";
import React from "react";
import { useState, useContext, useEffect, useRef } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function PopupEditAvatar({ isOpen, onClose, onUpdateAvatar }) {
  const { currentUser } = useContext(CurrentUserContext);
  const avatarRef = useRef();
  useEffect(() => {
    console.log(avatarRef);
  }, []);
  //console.log(avatarRef);
  function handleSubmit() {
    onUpdateAvatar({
      avatar: avatarRef,
    });
    console.log(avatarRef);
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="input-url-avatar"
        ref={avatarRef}
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
