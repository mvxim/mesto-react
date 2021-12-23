import { useContext, useEffect, useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import api from "../utils/api"
import Card from "./Card"

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  
  const currentUser = useContext(CurrentUserContext)
  const [ cards, setCards ] = useState([])
  
  useEffect(() => {
    api.getSetOfPlaces()
        .then((places) => {
          setCards(places)
        }).catch(error => {
      console.log(error)
    })
  }, [])
  
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id)
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c))
    }).catch(err => console.log(err))
  }
  
  const handleCardDelete = (card) => {
    api.removePlace(card._id).then(() => {
      setCards((cards) => cards.filter(c => c._id !== card._id))
    }).catch(err => console.log(err))
  }
  
  return (
      <main className="main page__main">
        <section aria-label="Профиль пользователя"
                 className="profile main__profile">
          <div className="profile__bio">
            <div className="profile__avatar-wrapper">
              <img alt="Фотография профиля пользователя"
                   className="profile__avatar"
                   src={ currentUser.avatar }/>
              <button className="button profile__avatar-btn"
                      onClick={ onEditAvatar }/>
            </div>
            <div className="profile__details">
              <div className="profile__row">
                <h1 className="profile__name">{ currentUser.name }</h1>
                <button className="button profile__edit-btn"
                        type="button"
                        onClick={ onEditProfile }/>
              </div>
              <p className="profile__desc">{ currentUser.about }</p>
            </div>
            <button className="button profile__add-btn"
                    type="button"
                    onClick={ onAddPlace }/>
          </div>
        </section>
        <section aria-label="Фотографии пользователя"
                 className="gallery">
          <ul className="gallery__grid">
            { cards.map(({ _id, ...card }) =>
                (<Card cardData={ { ...card, _id } }
                       key={ _id }
                       onCardClick={ onCardClick }
                       onCardLike={ handleCardLike }
                       onCardDelete={ handleCardDelete }/>)
            )
            }
          </ul>
        </section>
      
      </main>
  
  )
}

export default Main
