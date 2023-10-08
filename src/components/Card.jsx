function Card({ link, name, likes, onCardClick }) {
  return (
    <article className="element">
      <button type="button" className="element__button-delete"></button>
      <button
        className="element__link"
        onClick={() => onCardClick({ link, name })}
      >
        <img src={link} alt={name} className="element__img" />
      </button>
      <div className="element__wrapper">
        <h2 className="element__title">{name}</h2>
        <div className="element__wrapper-btn">
          <button type="button" className="element__button-like"></button>
          <div className="element__like-counter">{likes}</div>
        </div>
      </div>
    </article>
  );
}

export default Card;
