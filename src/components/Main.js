import React, { useEffect, useState } from "react"
import api from "../utils/api"
import Card from "./Card"

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  
  const [ userName, setUserName ] = useState("")
  const [ userDescription, setUserDescription ] = useState("")
  const [ userAvatar, setUserAvatar ] = useState("")
  const [ cards, setCards ] = useState([])
  
  useEffect(() => {
    api.getUserInfo()
        .then(({ avatar, name, about }) => {
          setUserName(name)
          setUserDescription(about)
          setUserAvatar(avatar)
        })
        .catch(error => {
          console.log(error)
        })
    api.getSetOfPlaces()
        .then((places) => {
          setCards(places)
        }).catch(error => {
      console.log(error)
    })
  }, [])
  
  return (
      <main className="main page__main">
        <section aria-label="Профиль пользователя"
                 className="profile main__profile">
          <div className="profile__bio">
            <div className="profile__avatar-wrapper">
              <img alt="Фотография профиля пользователя"
                   className="profile__avatar"
                   src={ userAvatar }/>
              <button className="button profile__avatar-btn"
                      onClick={ onEditAvatar }/>
            </div>
            <div className="profile__details">
              <div className="profile__row">
                <h1 className="profile__name">{ userName }</h1>
                <button className="button profile__edit-btn"
                        type="button"
                        onClick={ onEditProfile }/>
              </div>
              <p className="profile__desc">{ userDescription }</p>
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
                (<Card cardData={ card }
                       key={ _id }
                       onCardClick={ onCardClick }/>)
            )
            }
          </ul>
        </section>
      
      </main>
  
  )
}

export default Main
