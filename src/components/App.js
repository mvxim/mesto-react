import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import ImagePopup from "./ImagePopup"
import Main from "./Main"
import PopupWithForm from "./PopupWithForm"

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
  
  return (
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main onEditAvatar={ handleEditAvatarClick }
                onEditProfile={ handleEditProfileClick }
                onAddPlace={ handleAddPlaceClick }/>
          <Footer/>
          <PopupWithForm name="avatar"
                         title="Обновить аватар"
                         isOpen={ isEditAvatarPopupOpen }>
            <input aria-label="Поле ввода для ссылки на картинку"
                   className="modal__input modal__input_field_avatar"
                   id="field_avatar"
                   name="avatar-field-link"
                   placeholder="Ссылка на новую картинку профиля"
                   required
                   type="url"/>
            <span className="modal__error modal__error_field_avatar"/>
          </PopupWithForm>
          
          <PopupWithForm name="bio"
                         title="Редактировать профиль"
                         isOpen={ isEditProfilePopupOpen }>
            <input aria-label="Поле ввода для имени"
                   className="modal__input modal__input_field_name"
                   id="field_name"
                   maxLength="40"
                   minLength="2"
                   name="bio-field-name"
                   placeholder="Ваше имя"
                   required
                   type="text"/>
            <span className="modal__error modal__error_field_name"/>
            <input aria-label="Поле ввода для описания"
                   className="modal__input modal__input_field_desc"
                   id="field_desc"
                   maxLength="200"
                   minLength="2"
                   name="bio-field-desc"
                   placeholder="Расскажите о себе"
                   required
                   type="text"/>
            <span className="modal__error modal__error_field_desc"/>
          </PopupWithForm>
          
          <PopupWithForm name="card"
                         title="Новое место"
                         buttonText="Создать"
                         isOpen={ isAddPlacePopupOpen }>
            <input aria-label="Поле ввода для названия карточки"
                   className="modal__input modal__input_field_title"
                   id="field_title"
                   maxLength="30"
                   minLength="2"
                   name="card-field-title"
                   placeholder="Название"
                   type="text"/>
            <span className="modal__error modal__error_field_title"/>
            <input aria-label="Поле ввода для адреса картинки"
                   className="modal__input modal__input_field_picture"
                   id="field_picture"
                   name="card-field-picture"
                   placeholder="Ссылочка на картиночку"
                   type="url"/>
            <span className="modal__error modal__error_field_picture"/>
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
