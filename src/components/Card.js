import React, { useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card({ cardData, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext)
  const { name, link, likes, owner } = cardData
  
  const isOwn = owner._id === currentUser._id
  const galleryDeleteButtonClassName = (
      `delete gallery__delete-btn ${ isOwn ? "" : "delete_hidden" }`
  )
  
  const isLiked = likes.some(like => like._id === currentUser._id)
  const galleryLikeButtonClassName = (
      `like gallery__like-btn ${ isLiked ? "like_active" : "" }`)
  
  const handleCardClick = () => {
    console.log(cardData)
    onCardClick(cardData)
  }
  
  const handleLikeClick = () => {
    onCardLike(cardData)
  }
  
  return (
      <li className="gallery__item">
        <div className="gallery__image-container">
          <div className="gallery__image-wrapper">
            <img className="gallery__image"
                 src={ link }
                 alt={ `Карточка с фотографией. Название: ${ name }` }
                 onClick={ handleCardClick }/>
          </div>
        </div>
        <button className={ galleryDeleteButtonClassName }
                type="button"/>
        <div className="gallery__caption">
          <p className="gallery__text">{ name }</p>
          <div className="gallery__like-btn-wrapper">
            <button className={ galleryLikeButtonClassName }
                    type="button"
                    onClick={ handleLikeClick }/>
            <span className="gallery__like-btn-counter">{ likes.length }</span>
          </div>
        </div>
      </li>
  )
}

export default Card
