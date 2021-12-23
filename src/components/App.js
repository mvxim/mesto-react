import { useEffect, useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import api from "../utils/api"
import EditAvatarPopup from "./EditAvatarPopup"
import EditProfilePopup from "./EditProfilePopup"
import Footer from "./Footer"
import Header from "./Header"
import ImagePopup from "./ImagePopup"
import Main from "./Main"
import PopupWithForm from "./PopupWithForm"

function App() {
  const [ currentUser, setCurrentUser ] = useState({
    "name": "",
    "about": "",
    "avatar": "",
    "_id": "",
    "cohort": ""
  })
  
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false)
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false)
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false)
  const [ selectedCard, setSelectedCard ] = useState({ name: "", link: "" })
  
  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  
  const handleCardClick = (cardData) => {
    setSelectedCard(cardData)
  }
  
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({ name: "", link: "" })
  }
  
  const handleUpdateUser = (newUserInfo) => {
    api.setUserInfo(newUserInfo).then((newFetchedData) => {
      setCurrentUser(newFetchedData)
      closeAllPopups()
    }).catch()
  }
  
  const handleUpdateAvatar = (newAvatar) => {
    api.setUserAvatar(newAvatar).then((newFetchedAvatar) => {
      setCurrentUser(newFetchedAvatar)
      closeAllPopups()
    })
  }
  
  useEffect(() => {
    api.getUserInfo().then(r => setCurrentUser(r))
  }, [])
  
  return (
      <CurrentUserContext.Provider value={ currentUser }>
        <div className="page">
          <div className="page__container">
            <Header/>
            <Main onEditAvatar={ handleEditAvatarClick }
                  onEditProfile={ handleEditProfileClick }
                  onAddPlace={ handleAddPlaceClick }
                  onCardClick={ handleCardClick }/>
            <Footer/>
            
            <EditAvatarPopup isOpen={ isEditAvatarPopupOpen }
                             onClose={ closeAllPopups }
                             onUpdateAvatar={ handleUpdateAvatar }/>
            
            <EditProfilePopup isOpen={ isEditProfilePopupOpen }
                              onClose={ closeAllPopups }
                              onUpdateUser={ handleUpdateUser }/>
            
            <PopupWithForm name="card"
                           title="Новое место"
                           buttonText="Создать"
                           isOpen={ isAddPlacePopupOpen }
                           onClose={ closeAllPopups }>
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
            
            <ImagePopup card={ selectedCard }
                        onClose={ closeAllPopups }/>
          </div>
        </div>
      </CurrentUserContext.Provider>
  )
}

export default App
