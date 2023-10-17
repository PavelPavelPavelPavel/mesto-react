import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ userCardId, link, name, likes }) {
  const { currentUser, handleCardClick } = useContext(CurrentUserContext);
  const isOwn = userCardId === currentUser._id;
  const isLiked = likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__button-like ${
    isLiked && "element__button-like_active"
  }`;

  return (
    <article className="element">
      {isOwn && <button className="element__button-delete" />}
      <button
        className="element__link"
        onClick={() => handleCardClick({ link, name })}
      >
        <img src={link} alt={name} className="element__img" />
      </button>
      <div className="element__wrapper">
        <h2 className="element__title">{name}</h2>
        <div className="element__wrapper-btn">
          <button
            type="button"
            className={cardLikeButtonClassName}
            // onClick={handleLikeClick}
          ></button>
          <div className="element__like-counter">{likes.length}</div>
        </div>
      </div>
    </article>
  );
}

export default Card;
