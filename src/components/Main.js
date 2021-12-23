import { useContext, useEffect, useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import api from "../utils/api"
import Card from "./Card"

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  
  const currentUser = useContext(CurrentUserContext)

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
                       onCardLike={ onCardLike }
                       onCardDelete={ onCardDelete }/>)
            )
            }
          </ul>
        </section>
      
      </main>
  
  )
}

export default Main
