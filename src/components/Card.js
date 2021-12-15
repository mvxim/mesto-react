import React from "react"

function Card({ cardData, onCardClick }) {
  const { name, link, likes } = cardData
  
  const handleCardClick = () => {
    onCardClick(cardData)
  }
  
  return (
      <li className="gallery__item">
        <div className="gallery__image-container">
          <div className="gallery__image-wrapper">
            <img className="gallery__image" src={ link } onClick={handleCardClick}/>
          </div>
        </div>
        <button className="delete gallery__delete-btn"
                type="button"/>
        <div className="gallery__caption">
          <p className="gallery__text">{ name }</p>
          <div className="gallery__like-btn-wrapper">
            <button className="like gallery__like-btn"
                    type="button"/>
            <span className="gallery__like-btn-counter">{ likes.length }</span>
          </div>
        </div>
      </li>
  )
}

export default Card
