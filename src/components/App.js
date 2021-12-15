import React from "react"
import AvatarInputSet from "./AvatarInputSet"
import CardInputSet from "./CardInputSet"
import Footer from "./Footer"
import Header from "./Header"
import ImagePopup from "./ImagePopup"
import Main from "./Main"
import PopupWithForm from "./PopupWithForm"
import ProfileInputSet from "./profileInputSet"

function App() {
  
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false)
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false)
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false)
  
  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }
  
  return (
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main onEditAvatar={ handleEditAvatarClick }
                onEditProfile={ handleEditProfileClick }
                onAddPlace={ handleAddPlaceClick }/>
          <Footer/>
          <PopupWithForm name={ isEditAvatarPopupOpen
                                ? "avatar"
                                : isEditProfilePopupOpen
                                  ? "bio"
                                  : isAddPlacePopupOpen
                                    ? "card" : "" }
                         title={ isEditAvatarPopupOpen
                                 ? "Обновить аватар"
                                 : isEditProfilePopupOpen
                                   ? "Редактировать профиль"
                                   : isAddPlacePopupOpen
                                     ? "Новое место" : "" }
                         buttonText={ (isEditProfilePopupOpen || isEditAvatarPopupOpen)
                                      ? "Сохранить" : "Создать" }
                         isOpen={ isEditAvatarPopupOpen
                             || isEditProfilePopupOpen
                             || isAddPlacePopupOpen }
                         onClose={ closeAllPopups }>
            { isEditAvatarPopupOpen
              ? <AvatarInputSet/>
              : isEditProfilePopupOpen
                ? <ProfileInputSet/>
                : isAddPlacePopupOpen
                  ? <CardInputSet/>
                  : ""
            }
          </PopupWithForm>
          
          <PopupWithForm name="confirm"
                         title="Вы уверены?"
                         buttonText="Да">
          </PopupWithForm>
          
          <ImagePopup/>
        </div>
        <template className="gallery__item-template">
          <li className="gallery__item">
            <div className="gallery__image-container">
              <div className="gallery__image-wrapper">
                <img className="gallery__image"/>
              </div>
            </div>
            <button className="delete gallery__delete-btn"
                    type="button"/>
            <div className="gallery__caption">
              <p className="gallery__text"/>
              <div className="gallery__like-btn-wrapper">
                <button className="like gallery__like-btn"
                        type="button"/>
                <span className="gallery__like-btn-counter"/>
              </div>
            </div>
          </li>
        </template>
      </div>
  )
}

export default App
